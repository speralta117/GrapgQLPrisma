function assigments(parent, args, context) {
    return context.prisma.meeting({ id: parent.id }).assigments();
}

module.exports = {
    assigments
}