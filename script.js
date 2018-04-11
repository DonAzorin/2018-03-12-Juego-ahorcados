'use strict';
var reactive;
var score = {
  'win': 0,
  'fail': 0,
  'lose': 0
}
var checkWin = 0;
var checkLose = 0;

var listWords = ['juannepomucenoalmonte', 'mclaneocampo', 'monalmonte', 'monalmonte', 'plandetuxtepec', 'leyesdereforma', 'tratadospreliminaresdelasoledad', 'felixmariazuloaga', 'doctrinamonroe', 'juanalvarez', 'plandetacubaya']

function selectWord() {
  reactive = listWords [Math.floor (Math.random() * listWords.length )];
  console.log(reactive);
  restoreGame (reactive)
  makeTable (reactive);
  }

  //Usa una API... Quizá la de R&M :/
  // fetch('')

function restoreGame() {
  document.getElementById('failText').innerHTML = '0';
  document.getElementById('errores').src = 'images/0error.jpg';
  checkWin = 0;
  score.fail = 0;
  var showButton = document.querySelectorAll('.letter');
  for (var i = 0; i < showButton.length; i++) {
    var buttonList = showButton[i].id
    document.getElementById(buttonList).style.visibility = 'visible';
  }
}

function hideLetter(selectedLetter) {
  document.getElementById(selectedLetter).style.visibility = 'hidden';
}

function clickLetter (letter) {
  var selectedLetter = letter.value;
  compareLetter (selectedLetter);
  hideLetter (selectedLetter);
}

document.addEventListener('keydown', function getKeyLetter(event) {
  var selectedLetter = event.key.toLowerCase();
  compareLetter (selectedLetter);
  hideLetter (selectedLetter);
})

function compareLetter (selectedLetter) {
  var flag = 0;
  for (var i = 0; i < reactive.length; i++) {
    if (selectedLetter == reactive [i]) {
      document.getElementById('reactive').rows[0].cells[i].innerHTML = selectedLetter;
      checkWin++
    } else {
      flag ++;
    }
  }
  if (checkWin == reactive.length) {
    score.win = score.win + 1;
    winText.innerHTML = score.win;
  } else if (flag == reactive.length) {
    score.fail = score.fail + 1;
    failText.innerHTML = score.fail;
    failImage (score.fail);
  }
  //coloca una capa superior que no permita clickLetter o selectedLetter y tenga el botón de listWords
}

function failImage() {
  for(let i = 1; i <= 6; i++) {
    if(score.fail === i) {
      document.getElementById('errores').src = 'images/' + i + 'error.jpg';
    }
  }
  if (score.fail === 7) {
    document.getElementById('errores').src = 'images/7error.jpg';
    score.lose = score.lose + 1;
    loseText.innerHTML = score.lose;
  }
    //coloca una capa superior que no permita clickLetter o selectedLetter y tenga el botón de listWords
}

function makeTable () {
  document.getElementById('reactive').deleteRow(0);
  var table = document.getElementById('reactive');
  var row =  table.insertRow (0);
  for (var i = 0; i < reactive.length; i++) {
    var cell = row.insertCell (i)
  };
}
