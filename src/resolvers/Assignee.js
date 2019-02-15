function assigments(parent, args, context) {
    return context.prisma.assignee({ id: parent.id }).assigments();
}

module.exports = {
    assigments
}