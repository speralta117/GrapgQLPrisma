const moment = require('moment');

function createDate(date) {
    return moment(new Date(date));
}
function isMonday(date) {
    return date.day() === 0;
}
function getLastDate(date) {
    const sumDate = moment(date).add(7, 'days');
    return sumDate;
}
function formatDate(date) {
    return date.format('YYYY-MM-DD');
}

module.exports = {
    createDate,
    isMonday,
    getLastDate,
    formatDate
}