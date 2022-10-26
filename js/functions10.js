function calculateRoots (a, b, c) {
  var discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    var answer = 'Корней нет';
  } else if (discriminant === 0) {
    var root = - b / (2 * a);
    var answer = 'Корень равен ' + root;
  } else if (discriminant > 0) {
    var root1 = ((-b + Math.sqrt(discriminant)) / (2 * a));
    var root2 = ((-b - Math.sqrt(discriminant)) / (2 * a));
    var answer = 'Первый корень равен ' + root1 + ', второй корень равен ' + root2;
  }
  return answer;
}

calculateRoots(1, 2, 3);
console.log("calculateRoots(1, 2, 3)", calculateRoots(1, 2, 3));

/* Техническое задание
Мяу! Напиши функцию calculateRoots, которая будет считать корни через дискриминант.
Формула дискриминанта выглядит так: b * b - 4 * a * c. Функция должна принимать на вход три параметра: a, b, c. Это коэффициенты из формулы дискриминанта.
Если полученное число меньше 0, функция должна возвращать строку 'Корней нет'.
Если результат равен 0, корень в уравнении один. Функция должна возвращать строку 'Корень равен ' + найденный корень. Формула корня в этом случае такая: -b / (2 * a).
А вот если дискриминант больше 0, корня два. Придётся посчитать каждый и добавить результат в строку. Формула для первого корня: (-b + √D) / (2 * a). Формула для второго корня: (-b - √D) / (2 * a). Функция должна возвращать строку 'Первый корень равен ' + первый корень + ', второй корень равен ' + второй корень.
*/