var calculateDeposit = function (initialDepositAmount, percentsByYear, termOfDepositInMonths, capitalization) {
  var percentByMonth = percentsByYear / 12 / 100;
  var totalDeposit =  initialDepositAmount * (1 + percentByMonth * termOfDepositInMonths);
  if (capitalization) {
      totalDeposit = initialDepositAmount * Math.pow((1 + percentByMonth), termOfDepositInMonths);
  }
  return Math.floor(totalDeposit);
}

calculateDeposit(12000, 12, 6, true);
console.log("calculateDeposit(12000, 12, 6, true)", calculateDeposit(120000, 12, 6, true));

// решение через цикл

// var calculateDeposit = function (summ, percent, time, isСapitalization) {
//   if (isСapitalization) {
//     for (var i = 1; i <= time; i++) {
//       summ += summ * percent / (100 * 12);
//     }
//   } else {
//       summ += percent / 100 * 12 * time * summ;
//     }
//   return Math.floor(summ);
// }

// calculateDeposit(12000, 12, 6, true);
// console.log("calculateDeposit(12000, 12, 6, true)", calculateDeposit(120000, 12, 6, true));

/* Техническое задание

Мяу! Мне нужно посчитать, сколько я заработаю денег на вкладах с разными условиями. Оформи программу, как функцию calculateDeposit с четырьмя параметрами:
1. начальная сумма депозита;
2. процент годовых (число от 0 до 100);
3. срок вклада в месяцах;
4. с капитализацией процентов или нет (флаг с булевым значением).
Функция должна возвращать итоговую сумму депозита, округлённую до рублей с помощью Math.floor(). Название параметров используй любые.
Если вклад простой, то процент годовых делится на 12 и умножается на срок вклада, а затем начальная сумма увеличивается на посчитанный процент.
Вклад с капитализацией считается сложнее: каждый месяц к сумме депозита прибавляются накопленный за месяц процент годовых (не забывай делить процент на 12), а процент следующего месяца считается уже от увеличенной суммы депозита.
*/

// след. задание

var calculateDeposit = function (initialDepositAmount, percentsByYear, time, capitalization) {
  var percentByMonth = percentsByYear / 12 / 100;
  var totalDeposit =  initialDepositAmount * (1 + percentByMonth * time);
  if (capitalization) {
      totalDeposit = initialDepositAmount * Math.pow((1 + percentByMonth), time);
  }
  return Math.floor(totalDeposit);
}

var getProfitableDeposit = function (initialDepositAmount, time, rateForDepositWithSimpleInterest, rateForDepositWithInterestCapitalization ) {
  var depositWithSimpleInterest = calculateDeposit(initialDepositAmount, rateForDepositWithSimpleInterest, time, false); 
  var depositWithInterestCapitalization = calculateDeposit(initialDepositAmount, rateForDepositWithInterestCapitalization, time, true);
  if (depositWithSimpleInterest > depositWithInterestCapitalization) {  
    return ('Выбирай обычный вклад. Заработаешь ' + depositWithSimpleInterest);
  } else {
    return ('Выбирай капитализацию. Заработаешь ' + depositWithInterestCapitalization);
  }
}