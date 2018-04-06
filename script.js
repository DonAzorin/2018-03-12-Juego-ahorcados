'use strict';
var reactive;
var score = {
  'win': 0,
  'lose': 0,
  'fail': 0,
  }
var checkWin = 0;
var checkFail = 0;

function listWords() {
  reactive = Math.floor(Math.random()*10)

    if (reactive == 0) {
      reactive = 'juannepomucenoalmonte'
    } else if (reactive == 1) {
      reactive = 'mclaneocampo'
    } else if (reactive == 2) {
      reactive = 'monalmonte'
    } else if (reactive == 3) {
      reactive = 'plandetuxtepec'
    } else if (reactive == 4) {
      reactive = 'leyesdereforma'
    } else if (reactive == 5) {
      reactive = 'tratadospreliminaresdelasoledad'
    } else if (reactive == 6) {
      reactive = 'felixmariazuloaga'
    } else if (reactive == 7) {
      reactive = 'doctrinamonroe'
    } else if (reactive == 8) {
      reactive = 'juanalvarez'
    } else if (reactive == 9) {
      reactive = 'plandetacubaya'
    }
  console.log(reactive);

  //Usa una API... Quizá la de R&M :/
  // fetch('')

  document.getElementById('failText').innerHTML = '0';
  document.getElementById('errores').src = 'images/0error.jpg';
  var showButton = document.querySelectorAll('.letter');
  for (var i = 0; i < showButton.length; i++) {
    var buttonList = showButton[i].id
    document.getElementById(buttonList).style.visibility = 'visible';
  }

  makeTable (reactive);
}

function clickLetter (letter) {
  var selectedLetter = letter.value;
  compareLetter (selectedLetter);
  document.getElementById(selectedLetter).style.visibility = 'hidden';
}

document.addEventListener('keydown', function getKeyLetter(event) {
  var selectedLetter = event.key.toLowerCase();
  compareLetter (selectedLetter);
  document.getElementById(selectedLetter).style.visibility = 'hidden';
})

function compareLetter (selectedLetter) {
  for (var i = 0; i < reactive.length; i++) {
    if (selectedLetter == reactive [i]) {
      checkWin++;
      document.getElementById('reactive').rows[0].cells[i].innerHTML = selectedLetter;
    } else {
      checkFail++;
      // console.log(checkFail);
    }
  }
  if (checkWin == reactive.length){
    score.win = score.win + 1;
    winText.innerHTML = score.win;
  }
  // if (checkFail == reactive.length) {
  //   score.fail = score.fail + 1;
  //   failText.innerHTML = score.fail;
  // }

  // var tableLetter = document.querySelectorAll('td');
  // for (var i = 0; i < tableLetter.length; i++) {
  //   var reactiveLetter = tableLetter[i].innerHTML;
  //   if (reactiveLetter == tableLetter[i]) {
  //     checkWin = checkWin + 1;
  //     console.log(checkWin);
  //   } else if (checkWin == reactive.length) {
  //     console.log('Chingón compa');
  //     score.win = score.win + 1;
  //     winText.innerHTML = score.win;
      //coloca una capa superior que no permita clickLetter o selectedLetter y tenga el botón de listWords
  //   }
  // }

  if (score.fail === 1) {
    document.getElementById('errores').src = 'images/1error.jpg'
  } else if (score.fail === 2) {
    document.getElementById('errores').src = 'images/2error.jpg'
  } else if (score.fail === 3) {
    document.getElementById('errores').src = 'images/3error.jpg'
  } else if (score.fail === 4) {
    document.getElementById('errores').src = 'images/4error.jpg'
  } else if (score.fail === 5) {
    document.getElementById('errores').src = 'images/5error.jpg'
  } else if (score.fail === 6) {
    document.getElementById('errores').src = 'images/6error.jpg'
  } else if (score.fail === 7) {
    document.getElementById('errores').src = 'images/7error.jpg'
    //coloca una capa superior que no permita clickLetter o selectedLetter y tenga el botón de listWords
  }
}

function makeTable () {
  document.getElementById('reactive').deleteRow(0);
  var table = document.getElementById('reactive');
  var row =  table.insertRow (0);
  for (var i = 0; i < reactive.length; i++) {
    var cell = row.insertCell (i)
  };
}
