var startNumber = 1;
var multiplier = 4;
var quantity = 7;

console.log(startNumber);
for (var i = 1; i < quantity; i++) {
  startNumber *= multiplier;
  console.log(startNumber);
}

/* Техническое задание

Напишите программу, которая последовательно выводит в консоль числа в геометрической прогрессии.

Стартовое значение, с которого должна начаться последовательность, записано в переменную startNumber.

Множитель записан в переменную multiplier.

Количество чисел записано в переменную quantity.

*/

var lastNumber = 10;
var sum = 0;

for (var n = 1; n <= lastNumber; n++) {
  sum += n;
}
/* Техническое задание

Напишите универсальную программу, которая вычисляет сумму чисел от 1 до n.

Число, до которого нужно складывать числа (включительно), указано в переменной lastNumber.

Найдите сумму всех чисел и сохраните результат в переменную sum.

*/

var lastNumber = 5;
var multiplicationResult = 1;

for (var n = 1; n <= lastNumber; n++) {
  if (!(n % 2)) {
    multiplicationResult *= n;
  }
}
/* Техническое задание

Напишите универсальную программу, которая находит произведение всех чётных чисел из последовательности от 1 до n.

Число, до которого идёт последовательность (включительно), записано в переменную lastNumber

Найдите произведение всех чисел и сохраните результат в переменную multiplicationResult.

*/

var number = 15;

for (var n = 2; n < number; n++ ) {
  if (!(number % n)) {
    console.log(n);
  }  
}


/* Техническое задание

Напишите программу, которая находит все делители числа, кроме единицы и самого числа.

Число, делители которого нужно найти, записано в переменную number.

Выводите делители в консоль последовательно, друг за другом.

*/

var number = 123;
var quantity = 0;

while (number > 1) {
  number = Math.round(number / 10);
  quantity++;  
}
console.log(quantity);

/* Техническое задание

Напишу программу, которая определяет сколько цифр в одном числе.

Само число записано в переменную number.

Найди количество цифр в этом числе и запиши результат в переменную quantity.

*/

var days = 9; // Дней в периоде
var period = 3; // Как часто я ем протеин (раз в три дня)
var workDayAmount = 200; // Количество протеина в будние
var weekendAmount = 100; // Количество протеина в выходные
var total = 0;

for (var i = period; i <= days; i += period) {
  if (i % 7 === 0 || i % 7 === 6) {
    total += weekendAmount;
  } else { 
      total += workDayAmount;
    }
}


/* Техническое задание

Мяу! Программа должна считать количество протеина необходимое на период.

Во-первых, расчёт всегда начинается с понедельника. Это первый день.

Во-вторых, я принимаю протеин каждый третий день:
1 день, понедельник – нет,
2 день, вторник – нет,
3 день, среда – да,
4 день, четверг – нет,
5 день, пятница – нет,
6 день, суббота – да,
7 день, воскресенье – нет,
8 день, понедельник – нет,
9 день, вторник – да
и так далее.

В-третьих, известно, сколько протеина я съедаю в будние и сколько в выходные дни.

В-четвёртых, период задаётся целым числом, от одного до бесконечности (хотя планы дальше чем на месяц я обычно не строю).

Программа должна возвращать общее количество протеина за период, записанное в переменную total.

*/


var poly = 1221;
var ylop = 0;
var isPalindrome = false;

var left = poly;

while (left >= 1) {
  ylop *= 10;
  ylop += left%10;
  left -= left%10;
  left /= 10;
}

if (poly === ylop) {
  isPalindrome = true;
}
/* Техническое задание

Мяу! Напиши программу, которая проверяет, является ли число палиндромом.

Число записано в переменную poly.

Переменная, куда нужно записать «перевёрнутую» версию числа, называется ylop.

Выясни, является ли число из переменной poly палиндромом. Если да, значение флага isPalindrome должно быть true, если число не палиндром, то false.

*/