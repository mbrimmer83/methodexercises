var arr1 = [1, -2, 3, -4, 5, -6, -7, 8, 9, 10];
var arr2 = [2, 4, 6, 8, 10];

// ## Positive Numbers
function posNum (arr) {
  var newArr = arr.filter(function(element){
    return element > 0;
  });
}

// ## Square the Numbers

function squareArray(arr) {
  var newArr = arr.map(function(element){
    return element * element;
  });
  console.log(newArr);
}

// ## Good Job
var people = [
  'Sandhya',
  'Dave',
  'Carolyn',
  'DeeAnn',
  'Allen',
  'Anthony',
  'Kyle',
  'Shanda',
  'Cody',
  'Tim',
  'Regan',
  'Matt',
  'Andrew'
];

function goodJob (arr) {
  var newArr = arr.map(function(element){
    return ("Good Job " + element);
    // newArr.join("\n");
  });
  console.log(newArr);
}

// ## Names that start with A
function namesA (arr) {
  var newArr = arr.filter(function(element){
    return element[0] === "A";
  });
}

// ## catalog

var items = [
  { name: 'Basketball', price: 15.99, quantity: 2 },
  { name: 'Pump', price: 8.99, quantity: 1 },
  { name: 'Whistle', price: 2.99, quantity: 1 },
  { name: 'Cones', price: 3.99, quantity: 10 },
];

function prices (arr) {
    var newArr = arr.map(function(element){
      return element.price;
    });
    console.log(newArr);
}

function highPrices (arr) {
    var newArr = arr.filter(function(element){
      return element.price > 10;
    });
    console.log(newArr);
}

function total (arr) {
  var totalCost = arr.reduce(function(currentValue, number){
    return currentValue + number.price;
  }, 0);
  console.log(totalCost);
}

// ## Leetspeak

var str = "Matthew Brimmer is the shit! Got it?";

function leetSpeak (string) {
  var newString = string.toUpperCase();
  var theString = newString.split("");
  var strArr = theString.map(function(letter){
    if (letter === "A") {
      return "4";
    } else if (letter === "E") {
      return "3";
    } else if (letter === "G") {
      return "6";
    } else if (letter === "I") {
      return "1";
    } else if (letter === "O") {
      return "0";
    } else if (letter === "S") {
      return "5";
    } else if (letter === "T") {
      return "7";
    } else {
      return letter;
    }
  });
  var leetString = strArr.join("");
  console.log(leetString);
}

//## Basketball Players
function playerInfo (player) {
  var playerStatus = player.filter(function(element){
    return element.starter;
  });
  console.log(playerStatus);
}
// BB 2
function playerPosition (player) {
  var playerStatus = player.filter(function(element){
    return element.position === "PG";
  });
  console.log(playerStatus);
}
// BB 3
function playerNames (player) {
  var playerStatus = player.map(function(element){
    return element.name;
  });
  console.log(playerStatus);
}
// BB 4
function startersNames (player) {
  var playerStatus = player.filter(function(element) {
    return element.starter;
  });
  var startName = playerStatus.map(function(element) {
    return element.name;
  });
  console.log(startName);
}
// BB 6
function avgPoints (player) {
  var playerStatus = player.reduce(function(currentValue, number){
    return currentValue + number.avgPoints;
  }, 0);
  console.log(playerStatus);
}
// BB 7
function starterPoints (player) {
  var playerStatus = player.filter(function(element) {
    return element.starter;
  });
  var startersPoints = playerStatus.reduce(function(currentValue, number){
    return currentValue + number.avgPoints;
  }, 0);
  console.log(startersPoints);
}
// BB 8
function tenMin (player) {
  var playerStatus = player.every(function(element) {
    return element.avgMinutesPlayed > 10;
  });
  console.log(playerStatus);
}
// BB 9
function thirtyMin (player) {
  var playerStatus = player.filter(function(element) {
    return element. starter;
  });
  var starterMin = playerStatus.every(function(element) {
    return element.avgMinutesPlayed >= 30;
});
console.log(starterMin);
}
// BB 10
function playerTally (team) {
  var positions = players.map(function(player) {
    return player.position;
  });
  var tally = positions.reduce(function(tally, position){
    if (!tally[position]) {
      tally[position] = 1;
    } else {
      tally[position] += 1;
    }
    return tally;
  }, {});
}
