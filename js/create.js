var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
}

var cardList = document.querySelector('.products');
console.log(cardList.children);

var listItem = document.createElement('li');
listItem.classList.add('product');
cardList.appendChild(listItem);
console.log(cardList.children);

var title = document.createElement('h2');
title.classList.add('product__title');
title.textContent = 'Профессиональная селфи-палка';
listItem.appendChild(title);

var price = document.createElement('p');
price.classList.add('product__price');
price.textContent = '1000';
listItem.appendChild(price);

//Другой варинат с функцией

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var cardList = document.querySelector('.products');

var listItem = makeElement('li', 'product');
cardList.appendChild(listItem);

var title = makeElement('h2', 'product__title', 'Профессиональная селфи-палка');
listItem.appendChild(title);

var price = makeElement('p', 'product__price', '1000');
listItem.appendChild(price);

// Дальнейшее развитие

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var cardList = document.querySelector('.products');
console.log(cardList.children);

var listItem = makeElement('li', 'product');
cardList.appendChild(listItem);
console.log(cardList.children);

var title = makeElement('h2', 'product__title', 'Профессиональная селфи-палка');
listItem.appendChild(title);

// Изображение добавляйте сюда
var picture = makeElement ('img', 'product__image');
picture.src = 'device/item-4.jpg';
picture.alt = 'Профессиональная селфи-палка';
listItem.appendChild(picture);

var price = makeElement('p', 'product__price', '1000');
listItem.appendChild(price);

// создание HTML-странички с помощью JS

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function () {
  var listItem = makeElement('li', 'product');

  var title = makeElement('h2', 'product__title', 'Профессиональная селфи-палка');
  listItem.appendChild(title);

  var picture = makeElement('img', 'product__image');
  picture.src = 'device/item-4.jpg';
  picture.alt = 'Профессиональная селфи-палка';
  listItem.appendChild(picture);

  var price = makeElement('p', 'product__price', '1000');
  listItem.appendChild(price);

  return listItem;
};

var cardList = document.querySelector('.products');

var cardItem = createCard();

cardList.appendChild(cardItem);

// Заменяем статические данные на динамические

var cardList = document.querySelector('.products');

var productInfo = {
  isAvailable: true,
  imgUrl: 'device/item-1.jpg',
  text: 'Селфи-палка для начинающих',
  price: 200,
  isSpecial: false,
  specialPrice: null
};

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function (product) {
  var listItem = makeElement('li', 'product');

  var title = makeElement('h2', 'product__title', product.text);
  listItem.appendChild(title);

  var picture = makeElement('img', 'product__image');
  picture.src = product.imgUrl;
  picture.alt = product.text;
  listItem.appendChild(picture);

  var price = makeElement('p', 'product__price', product.price);
  listItem.appendChild(price);

  return listItem;
};

var cardItem = createCard(productInfo);
cardList.appendChild(cardItem);

// развитие

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function (product) {
  var listItem = makeElement('li', 'product');

  var title = makeElement('h2', 'product__title', product.text);
  listItem.appendChild(title);

  var picture = makeElement('img', 'product__image');
  picture.src = product.imgUrl;
  picture.alt = product.text;
  listItem.appendChild(picture);

  var price = makeElement('p', 'product__price', product.price);
  listItem.appendChild(price);
  
  var availabilityClass = 'product--available';
  if (!product.isAvailable) {
    availabilityClass = 'product--unavailable';
  }
  listItem.classList.add(availabilityClass);

  return listItem;
};

var cardList = document.querySelector('.products');

var productInfo = {
  isAvailable: false,
  imgUrl: 'device/item-1.jpg',
  text: 'Селфи-палка для начинающих',
  price: 200,
  isSpecial: false,
  specialPrice: null
};

var cardItem = createCard(productInfo);
cardList.appendChild(cardItem);

// добавление спец. цены и перезапись цены

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function (product) {
  var listItem = makeElement('li', 'product');

  var title = makeElement('h2', 'product__title', product.text);
  listItem.appendChild(title);

  var picture = makeElement('img', 'product__image');
  picture.src = product.imgUrl;
  picture.alt = product.text;
  listItem.appendChild(picture);

  var price = makeElement('p', 'product__price', product.price);
  listItem.appendChild(price);

  var availabilityClass = 'product--available';
  if (!product.isAvailable) {
    availabilityClass = 'product--unavailable';
  }
  listItem.classList.add(availabilityClass);
  
  if (product.isSpecial) {
    listItem.classList.add('product--special');
    var specialPrice = makeElement('p', 'product__special-price', product.specialPrice);
    listItem.appendChild(specialPrice);
  }

  return listItem;
};

var cardList = document.querySelector('.products');

var productInfo = {
  isAvailable: true,
  imgUrl: 'device/item-1.jpg',
  text: 'Селфи-палка для начинающих',
  price: 200,
  isSpecial: true,
  specialPrice: 300
};

var cardItem = createCard(productInfo);
cardList.appendChild(cardItem);

// итог

var cardsData = [
  {
    inStock: true,
    imgUrl: 'gllacy/choco.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 310,
    isHit: true,
    specialOffer: 'Двойная порция сиропа бесплатно!'
  },
  {
    inStock: false,
    imgUrl: 'gllacy/lemon.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 125,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cowberry.jpg',
    text: 'Сливочное с брусничным джемом',
    price: 170,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cookie.jpg',
    text: 'Сливочное с кусочками печенья',
    price: 250,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/creme-brulee.jpg',
    text: 'Сливочное крем-брюле',
    price: 190,
    isHit: false
  }
];

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
}

var createCard = function (good) {
  var listItem = makeElement('li', 'good');
  
  var title = makeElement('h2', 'good__description', good.text);
  listItem.appendChild(title);
  
  var picture = makeElement('img', 'good__image');
  picture.src = good.imgUrl;
  picture.alt = good.text;
  listItem.appendChild(picture);
  
  var price = makeElement('p', 'good__price', good.price + '₽/кг')
  listItem.appendChild(price);
  
  if (good.inStock) {
    listItem.classList.add('good--available');
  } else {
    listItem.classList.add('good--unavailable');
  }
  
  if (good.isHit) {
    listItem.classList.add('good--hit');
  }
    
  if (good.specialOffer && good.isHit) {    
    var specialOffer = makeElement('p', 'good__special-offer', good.specialOffer);
    
    listItem.appendChild(specialOffer);
  }
  
  return listItem;
}

var renderCards = function (goods) {
  var cardList = document.querySelector('.goods');
  for (var i = 0; i < goods.length; i++) {
    var cardItem = createCard(goods[i]);
    cardList.appendChild(cardItem);
  }
}

renderCards(cardsData);

/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
  </li>
  ...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.

*/

