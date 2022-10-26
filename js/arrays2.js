var usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

for (var currentIndex = 0; currentIndex <= usersByDay.length - 2; currentIndex++) {
    // Сортировка с первого элемента

    var minValue = usersByDay[currentIndex];

    for (var j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
        if (usersByDay[j] < minValue) {
            minValue = usersByDay[j];
            var swap = usersByDay[currentIndex];
            usersByDay[currentIndex] = minValue;
            usersByDay[j] = swap;
            console.log('Меняю местами ' + swap + ' и ' + minValue);
            console.log('Массив сейчас: ' + usersByDay);
        }
    }

    console.log('На позиции ' + currentIndex + ' находится минимальный элемент ' + minValue);
}
// Завершите цикл здесь

var usersByDay = [812, 1360, 657, 1247, 165];
console.log(usersByDay);

for (var i = 0; i <= usersByDay.length - 2; i++) {
    var minValue = usersByDay[i];

    for (var j = i + 1; j <= usersByDay.length - 1; j++) {
        if (usersByDay[j] < minValue) {
            minValue = usersByDay[j];
            var swap = usersByDay[i];
            usersByDay[i] = minValue;
            usersByDay[j] = swap;
        }
    }
}

console.log(usersByDay);


var expectedUsers = 1000;

var usersByDay = [817, 581, 1370, 752, 1247, 681, 1120, 915, 875, 1341, 757, 610, 812, 741, 1139, 812, 638, 877, 1242, 1159, 1372, 1170, 845, 1289, 515, 1247, 769, 1261, 2805, 1201];

// Рисуем график посещаемости
keks.plot(usersByDay, expectedUsers);

// Суммируем посещаемость
var totalUsers = 0;
for (var i = 0; i <= usersByDay.length - 1; i++) {
    totalUsers += usersByDay[i];
}

// Рассчитываем среднее значение посещаемости
var averageUsers = totalUsers / usersByDay.length;
console.log('Средняя посещаемость: ' + averageUsers);

if (averageUsers > expectedUsers) {
    console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
    console.log('Посещаемость так себе. Нужно поднапрячься!');
}

// Сортируем массив

for (var i = 0; i <= usersByDay.length - 2; i++) {
    var minValue = usersByDay[i];

    for (var j = i + 1; j <= usersByDay.length - 1; j++) {
        if (usersByDay[j] < minValue) {
            minValue = usersByDay[j];
            var swap = usersByDay[i];
            usersByDay[i] = minValue;
            usersByDay[j] = swap;
        }
    }
}
console.log(usersByDay);

// Рассчитываем медиану
if (usersByDay.length % 2 !== 0) {
    var medianIndex = (usersByDay.length - 1) / 2;
    var median = usersByDay[medianIndex];
} else {
    var leftIndex = usersByDay.length / 2 - 1;
    var rightIndex = usersByDay.length / 2;
    var median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
}
console.log('Медианная посещаемость: ' + median);

// Сортировка массива

var numbers = [12, 3, 7, 9, 10, 5];

for (var i = 0; i <= numbers.length - 2; i++) {
    var minValue = numbers[i];

    for (var j = i + 1; j <= numbers.length - 1; j++) {
        if (numbers[j] < minValue) {
            minValue = numbers[j];
            var swap = numbers[i];
            numbers[i] = minValue;
            numbers[j] = swap;
        }
    }
}

console.log(numbers);
// Выведет [3, 5, 7, 9, 10, 12];


// испытание

var qualificationDistance = 200;
var attempts = [120, 150, 160, 201, 203, 180, 202];
var qualified = false;
var averageBest = 0;

for (var i = 0; i <= attempts.length - 2; i++) {
    var maxValue = attempts[i];

    for (var j = i + 1; j <= attempts.length - 1; j++) {
        if (attempts[j] > maxValue) {
            maxValue = attempts[j];
            var swap = attempts[i];
            attempts[i] = maxValue;
            attempts[j] = swap;
        }
    }
}

for (var k = 0; k < 3; k++) {
    averageBest += attempts[k];
}

averageBest /= 3;
qualified = averageBest > qualificationDistance;

/* Техническое задание

Мяу! Я провожу тренировки и хочу понять, пройду ли квалификацию.

В течение тренировки я делаю несколько прыжков, и собираю длины прыжков в массив attempts.

Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.

Квалификационное значение хранится в переменной qualificationDistance.

Если среднее от лучших трёх прыжков больше квалификационного значения, то я прошёл квалификацию и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.

*/