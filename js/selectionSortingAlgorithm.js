var numbers = [3, 5, 15, 6, 2, 1];

for (var i = 0; i < numbers.length; i++) {
  var min = i;
  
  for (var j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[min]) {
      min = j;
    }
  }
  
  var tmp = numbers[i];
  numbers[i] = numbers[min];
  numbers[min] = tmp;
}

console.log(numbers);

/* Техническое задание
Напиши сортировку массива выбором.
Массив записан в переменную numbers.
Отсортируй значения в массиве по возрастанию, от самого маленького значения к наибольшему.
*/