var data = ['привет', 'пока', 'привет', 'пока', 'здрасте', 'привет'];

// function getRepeats (data) {
//   for (var i = 0; i < data.length; i++) {

//   }
// }

// var repeats = {};

// for (var i = 0; i < data.length; i++) {
    
// }

// var getRepeats = function (array) { 
//     var obj = {}; // создаем пустой объект
    
//     for (var i = 0; i < array.length; i++) { // вкладываем перебор в массив
    
//     if (!(array[i] in obj)) { // (*используем "in") если значение порядкового элемента массива отсутствует в объекте
//         obj[array[i]] = 1; // создаем и ставим зачение "1"
//     } else { // в противном случае (если присутствует)
//         obj[array[i]]++ // +1 к значению
//         } 
//     }
//     return obj // возвращаем из объект из функции
// }

var getRepeats = function (array) { 
    var obj = {};
    
    for (var i = 0; i < array.length; i++) {
    
    if (!(array[i] in obj)) {
				console.log("TCL: getRepeats -> array[i]", array[i])
        obj[array[i]] = 1;
    } else {
        obj[array[i]]++;
      } 
    }
    return obj;
}

getRepeats(data);
console.log("TCL: getRepeats(data)", getRepeats(data));
