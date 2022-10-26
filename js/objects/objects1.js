var dictionary = {
    'понедельник': 'monday',
    'вторник': 'tuesday',
    'среда': 'wednesday',
    'четверг': 'thursday',
    'пятница': 'friday',
    'суббота': 'saturday',
    'воскресенье': 'sunday'
};

function translate (russianWord, dictionary) {
    var translatedWord = dictionary[russianWord];
    return (russianWord + ' по-английски: ' + translatedWord);
}

