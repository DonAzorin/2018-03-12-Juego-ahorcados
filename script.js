'use strict';
var reactive;

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
  makeTable (reactive);
}

function clickLetter (letter) {
  var selectedLetter = letter.value;
  console.log(selectedLetter);
  compareLetter (selectedLetter);
}

document.addEventListener('keydown', function getKeyLetter(event) {
  var selectedLetter = event.key.toLowerCase();
  console.log(selectedLetter);
  compareLetter (selectedLetter);
})

function compareLetter (selectedLetter) {
  console.log(reactive.length);
  for (var i = 0; i < reactive.length; i++) {
    if (selectedLetter == reactive [i]){
      console.log('chingon');
    } else {
      console.log('fail');
    }
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
