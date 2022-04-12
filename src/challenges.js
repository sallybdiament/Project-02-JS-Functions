// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayDeStrings) {
  let stringName = arrayDeStrings[arrayDeStrings.length-1] + ', ' + arrayDeStrings[0];
  return stringName;
}

// Desafio 5
function footballPoints(wins, ties) {
  const pointsWin = 3;
  const pointsTies = 1;
  let totalPoints = pointsWin * wins + pointsTies * ties;
  return totalPoints;
}

// Desafio 6

function highestCount(numbers) {
  let count = 0;
  let numbersOrdenados = numbers.sort(function(a, b){return a -b});
  for (let index in numbers) {
    if (numbersOrdenados[numbersOrdenados.length - 1] === numbers[index]) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
