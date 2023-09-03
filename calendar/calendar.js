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
  // ERROR if the the day is <1 or >31
  // AND month is january, march, may, july, august, october, december
  // ERROR if the day is <1 or >30
  // AND month is april, june, september, november
  // ERROR if the day is <1 or >29
  // AND the month is february
}

module.exports = {
  createEvent
  // createCalendar,
  // reportMonthlyEvents
};
