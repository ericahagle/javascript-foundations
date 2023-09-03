function createEvent(title, month, day) {
  var event = { title: title, month: month, day: day };
  if (
    event.day < 1 ||
    (event.day > 29 && event.month === 'February') ||
    (event.day > 30 && event.month === 'April') ||
    (event.day > 30 && event.month === 'June') ||
    (event.day > 30 && event.month === 'September') ||
    (event.day > 30 && event.month === 'November') ||
    (event.day > 31 && event.month === 'January') ||
    (event.day > 31 && event.month === 'March') ||
    (event.day > 31 && event.month === 'May') ||
    (event.day > 31 && event.month === 'July') ||
    (event.day > 31 && event.month === 'August') ||
    (event.day > 31 && event.month === 'October') ||
    (event.day > 31 && event.month === 'December')
  ) {
    return `Error: ${event.day} is not a valid day`;
  } else {
    return event;
  }
}

function createCalendar(owner, events) {
  var calendar = { owner: owner, events: events };
  return calendar;
}

module.exports = {
  createEvent,
  createCalendar
  // reportMonthlyEvents
};
