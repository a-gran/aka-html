var checkVehicle = function (numberOfWheels, weightOfThisVehicle) {
  if (numberOfWheels === 2 && weightOfThisVehicle < 100) {
    return 'Парковка разрешена';
  } else {
      return 'Вам здесь не место! Мяу!';
    }
}

checkVehicle(2, 50);

/* Техническое задание
Мяу! Напиши программу для определения типа транспорта на велосипедной парковке.
Оформи решение в виде функции checkVehicle с двумя параметрами: количество колёс у транспорта и вес этого транспорта. Названия параметров могут быть любыми.
Если колеса два и вес транспорта меньше 100 кг, это велосипед. Функция должна возвращать строку 'Парковка разрешена'.
В остальных случаях функция должна возвращать строку 'Вам здесь не место! Мяу!'.
*/

var calculatePressure = function(fluidDensity, depth) {
  return Math.round(9.8 * fluidDensity * depth);
}

calculatePressure(1000, 20);

/* Техническое задание
Мяу! Напиши функцию calculatePressure, которая будет считать давление на глубине и возвращать это значение из функции.
Формула расчёта такая: давление = плотность жидкости * ускорение свободного падения * глубина.
У calculatePressure должно быть два параметра: плотность жидкости и глубина. Названия параметров могут быть любыми.
Ускорение свободного падения записывать в параметры не нужно. В формуле можно использовать среднее фиксированное значение — 9.8.
Результат вычислений округляй с помощью Math.round().
*/

var calculate = function (firstNumber, secondNumber, operator) {
  if (operator === '+') {
    return parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
  } else if (operator === '-') {
      return parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
    } else if (operator === '*') {
        return parseInt(firstNumber, 10) * parseInt(secondNumber, 10);
      } else {
          return parseInt(firstNumber, 10) / parseInt(secondNumber, 10);
        }
}


// еще вариант

function calculate(firstNumber, secondNumber, operator) {
 var result = 0;

  switch(operator) {
    case '+':
  result = (+firstNumber) + (+secondNumber);
    break;
    case '-':
  result = (+firstNumber) - (+secondNumber); 
    break;
    case '*':
  result = (+firstNumber) * (+secondNumber);
    break;

// Проверка, деления на 0

  default:
    if(secondNumber != 0) {
      result = (+firstNumber) / (+secondNumber);
    } else {
        result = 'Деление на 0 невозможно!'
      }
  }
  return result;
}

/* Техническое задание
Мяу! Напиши функцию calculate, которая будет распознавать пользовательский ввод, совершать математические операции и возвращать результат.
Параметры функции — firstNumber, secondNumber и operator.
Параметры firstNumber, secondNumber — операнды, параметр operator - оператор.
Все значения приходят в виде строк, в том числе и операторы. В третьем параметре содержится один из операторов: сложение ('+'), вычитание ('-'), умножение ('*'), деление ('/').
В зависимости от оператора программа должна совершать разные операции: складывать первое число со вторым, вычитать из первого числа второе, умножать первое на второе, делить первое на второе.
Не забудь сделать из строк с числами настоящие числа.
*/

var maxCalorie = 0;
var numberOfDishes = [];

function getDiet(calorieDishes, calorieLimitPerDay) {  
  for (var i = 0; i < calorieDishes.length; i++) {
    maxCalorie += calorieDishes[i];
    if (maxCalorie <= calorieLimitPerDay) {
      numberOfDishes.push(calorieDishes[i]);
    }
  }
  return numberOfDishes.length;
}


// 2) решение Если съесть все блюда

var getDiet = function (dishList, calLimit) {
  var totalCal = 0;
  var dishAmount = 0;
  for (var i = 0; i < dishList.length; i++) {
    totalCal += dishList[i];
    if (totalCal <= calLimit) {
      dishAmount++;
    }
  }
  return dishAmount;
}

/* Техническое задание

Мяу! Напиши программу, которая будет анализировать мой суточный рацион.
Оформи программу в виде функции getDiet. Она должна принимать два параметра: массив с калорийностью блюд и лимит калорий на день. Названия параметров могут быть любыми.
Программа должна возвращать количество блюд из массива, которые я могу съесть и не превысить допустимые калории. Блюда будут съедаться по порядку, начиная с первого элемента в массиве.
*/

