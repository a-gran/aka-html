var documents = ["01112018","20092017","05102017","12052018","04072005","02022018"];

function getDocumentsNumbers (documents, year) {
  var  documentsNumbers = 0;
  for (var i = 0; i < documents.length; i++) {
    if (documents[i].indexOf(year, 4) >= 0) {
      documentsNumbers++;
    }
  }
  return documentsNumbers;
}

console.log('getDocumentsNumbers(documents, 2018)', getDocumentsNumbers(documents, 2018));

/* Техническое задание
Мяу! Напиши программу getDocumentsNumbers, которая будет возвращать число документов за указанный год.
У функции должно быть два параметра: массив с названиями документов и год, за который надо найти документы. Названия параметров могут быть любыми. Даты из массива записаны в виде строк.
Функция должна возвращать количество документов, в названии которых есть необходимый год.
Если таких документов в массиве нет, функция должна возвращать 0.
*/

