'use strict';
var reactive;
var score = {
  'win': 0,
  'fail': 0,
  'lose': 0
}
var checkWin = 0;
var checkLose = 0;

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
  checkWin = 0;
  score.fail = 0;
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
  }
  //coloca una capa superior que no permita clickLetter o selectedLetter y tenga el botón de listWords

  for(let i = 1; i <= 6; i++) {
    if(score.fail === i) {
      document.getElementById('errores').src = 'images/' + i + 'error.jpg';
    }
  }

  if (score.fail === 7) {
    document.getElementById('errores').src = 'images/7error.jpg';
    score.lose = score.lose + 1;
    loseText.innerHTML = score.lose;


    // si 7 es igual a 1, envía un innerHTML que se imprima en palabras erróneas
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
