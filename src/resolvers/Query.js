function feed(root, args, context, info) {
    return context.prisma.links();
}

function meetings(root, args, context, infoe) {
    return context.prisma.meetings();
}

function meeting(root, args, context, infoe) {
    console.log(args);
    return context.prisma.meetings({
        first: 1,
        where: {
            AND: [
                { from_lte: args.day },
                { to_gte: args.day }
            ]

        }
    });
}

function assignee(root, args, context, infoe) {
    return context.prisma.assignee({
       id: args.id
    });
}
module.exports = {
    feed,
    meeting,
    assignee,
    meetings
}