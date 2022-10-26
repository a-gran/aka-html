var week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

function getDayOfWeek (dayOfWeekFirstDayOfMonth, numberDayOfWeekThisMonth) {
  var k = week.indexOf(dayOfWeekFirstDayOfMonth);
  var swap = numberDayOfWeekThisMonth % 7 - 1;
  var dayOfWeek = week[k + swap];
  if (numberDayOfWeekThisMonth % 7 === 0 && dayOfWeekFirstDayOfMonth === 'понедельник') {
    var dayOfWeek = week[k + 6];
  }  
  return dayOfWeek;
}

console.log("getDayOfWeek", getDayOfWeek('понедельник', 14));

/* Техническое задание
Мяу! Напиши для меня программу-календарь.
Оформи программу в виде функции getDayOfWeek. У неё должно быть два параметра: день недели, на который выпадает первое число месяца, и число, для которого нужно найти день недели в этом месяце.
Функция должна возвращать строку с названием для недели. Название должно быть написано с маленькой буквы в именительном падеже: 'понедельник', 'вторник' и так далее.
*/
  // 
