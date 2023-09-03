function createBirthday(name, month, day) {
  var birthday = { name: name, month: month, day: day };
  return birthday;
}

function celebrateBirthday(birthday) {
  return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`;
}

module.exports = {
  createBirthday,
  celebrateBirthday,
  //   countBirthday
};
