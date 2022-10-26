var dayOfWeek = '';
var week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

function getDayOfWeek (dayOfWeekTheFirstDayOfMonth, numberForWhichDayOfWeekThisMonth) {
  var k = week.indexOf([dayOfWeekTheFirstDayOfMonth]);
  var swap = numberForWhichDayOfWeekThisMonth % 7;
  var dayOfWeek = week[swap + k];
  if (numberForWhichDayOfWeekThisMonth === 7) {

  } if else (numberForWhichDayOfWeekThisMonth < 7) {

  }
  return dayOfWeek;
}

getDayOfWeek();