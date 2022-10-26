var gameRules = {
  diceNumber: 1,
  maxAttempts: 1
};

var firstCat = {
  name: 'Кекс',
  points: 0
};

var secondCat = {
  name: 'Рудольф',
  points: 0
};

var thirdCat = {
  name: 'Рокки',
  points: 0
};

var cats = [firstCat, secondCat, thirdCat];

var runGame = function (rules, players) {
  for (var currentAttempt = 1; currentAttempt <= rules.maxAttempts; currentAttempt++) {
    for (var i = 0; i < players.length; i++) {
      var throwResult = keks.throwDice(rules.diceNumber, rules.diceNumber * 6);
      players[i].points += throwResult;
      console.log(players[i].name + ' выбросил ' + players[i].points);
    }
  }
  return players;
};

var getWinners = function (players) {
  var winners = [];
  var max = players[0];

  for (var i = 0; i < players.length; i++) {
    var currentPlayer = players[i];
    if (currentPlayer.points > max.points) {
      max = currentPlayer;
      winners = [max];
    } else if (currentPlayer.points === max.points) {
      winners.push(currentPlayer);
    }
  }

  return winners;
};


var printWinners = function (players, winners) {
  if (players.length === winners.length) {
    console.log('Все коты как на подбор!');
    return;
  }

  var message = 'Победил ';
  
  if (winners.length > 1) {
    message = 'Победили ';
  }

  for (var i = 0; i < winners.length; i++) {
    if (i >= 1) {
      message += ', '; 
    }
    message += winners[i].name;
  }

  message += ' с количеством очков: ' + winners[0].points;

  console.log(message);
};

cats = runGame(gameRules, cats);
var tops = getWinners(cats);
printWinners(cats, tops);
