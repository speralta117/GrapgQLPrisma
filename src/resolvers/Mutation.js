const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')
const DateUtils = require('../utilities/DateUtils');

async function signup(parent, args, context, info) {
    // 1
    const password = await bcrypt.hash(args.password, 10)
    // 2
    const user = await context.prisma.createUser({ ...args, password })

    // 3
    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    // 4
    return {
        token,
        user,
    }
}

async function login(parent, args, context, info) {

    const user = await context.prisma.user({ email: args.email })
    if (!user) {
        throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
        throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

function post(parent, args, context, info) {
    const userId = getUserId(context)
    return context.prisma.createLink({
        url: args.url,
        description: args.description,
        postedBy: { connect: { id: userId } },
    })
}

async function vote(parent, args, context, info) {
    // 1
    const userId = getUserId(context)

    // 2
    const linkExists = await context.prisma.$exists.vote({
        user: { id: userId },
        link: { id: args.linkId },
    })
    if (linkExists) {
        throw new Error(`Already voted for link: ${args.linkId}`)
    }

    // 3
    return context.prisma.createVote({
        user: { connect: { id: userId } },
        link: { connect: { id: args.linkId } },
    })
}

async function createMeeting(parent, args, context, info) {
    var MeetingDate = DateUtils.createDate(args.from);

    if(!DateUtils.isMonday(MeetingDate)){
        throw new Error(`The meeting must start on Monday.`)
    }

    var LastDayOfTheWeek = DateUtils.getLastDate(MeetingDate);

    var meeting = {
        from: DateUtils.formatDate(MeetingDate),
        to: DateUtils.formatDate(LastDayOfTheWeek)
    }

    console.log(meeting);

    return await context.prisma.createMeeting(meeting);
}

async function addMember(parent, args, context, info) {

    // 3
    return await context.prisma.createAssignee({
        ...args,
    })
}

async function addAssignment(parent, args, context, info) {

    console.log(args);
    return await context.prisma.createAssigments({
        name: args.Name,
        meeting: { connect: { id: args.meetingId } },
        assignee: { connect: { id: args.assigneeId } },
    })
}

module.exports = {
    signup,
    login,
    post,
    vote,
    addMember,
    addAssignment,
    createMeeting
}