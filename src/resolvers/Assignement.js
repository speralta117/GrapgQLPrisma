function meeting(parent, args, context) {
    return context.prisma.assigments({ id: parent.id }).meeting()
}

function assignee(parent, args, context) {
    return context.prisma.assigments({ id: parent.id }).assignee()
}

function assitant(parent, args, context) {
    return context.prisma.assigments({ id: parent.id }).assitant()
}

module.exports = {
    meeting,
    assignee,
    assitant
}