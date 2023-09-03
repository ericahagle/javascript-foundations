function createBirthday(name, month, day) {
  var birthday = { name: name, month: month, day: day };
  return birthday;
}

function celebrateBirthday(birthday) {
  return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`;
}

function countBirthdays(arrOfBdays, month) {
  var birthdayCounter = 0;
  for (var i = 0; i < arrOfBdays.length; i++) {
    if (arrOfBdays[i].month === month) {
      birthdayCounter = birthdayCounter + 1;
    }
  }
  return birthdayCounter;
}

module.exports = {
  createBirthday,
  celebrateBirthday,
  countBirthdays,
};
