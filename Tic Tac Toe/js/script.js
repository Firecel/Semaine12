var turnNum = 0;
var arr = ['', '', '', '', '', '', '', '', ''];


function setNames () {
    turnNum = 1;
// Choix du nom
    var name1 = prompt("Choix du nom", "Pikachu");
    var name2 = prompt("Choix du nom", "Gollum");

    if (name1 == " " || name1 == null) {
        name1 = "Pikachu";
    }

    if (name2 == " " || name2 == null) {
        name2 = "Gollum";
    }


    // assignation
    var player1Name = document.getElementById('X');
    player1Name.innerHTML = name1;

    var player2Name = document.getElementById('O');
    player2Name.innerHTML = name2;

}



/***** Fonction initiale ******/

function init() {

    setNames();

    // 1 cellule = 1 div
    var cells = document.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {

        var cell = document.getElementById('c' + [i]);
        cell.innerHTML = '<div id="d' + [i] + '"></div>';
    }


    // 1 cellule = 1 bouton
    var cells = document.querySelectorAll('td');
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function() {
            squareClicked(this.id)});
    }

    // Joueur actif

   var playerX = document.getElementById("X");
    var playerO = document.getElementById("O");

    playerX.className = 'current-player';
    playerO.className = ' ';

}


/***** Fonction tour ******/


function squareClicked(x) {

    turnNum++;

    var playerX = document.getElementById("X");
    var playerO = document.getElementById("O");

    var playerXClass = playerX.className;
    var playerOClass = playerO.className;

    var clickedEl = document.getElementById(x);
    var numDiv = clickedEl.firstChild;

    // if empty
    if (numDiv.className == 0) {
        // if player X
        if (playerXClass == 'current-player') {
            numDiv.className = 'X-marker';
            switch(clickedEl) {
                case c0:
                    arr[0] = "X";
                    break;
                case c1:
                    arr[1] = "X";
                    break;
                case c2:
                    arr[2] = "X";
                    break;
                case c3:
                    arr[3] = "X";
                    break;
                case c4:
                    arr[4] = "X";
                    break;
                case c5:
                    arr[5] = "X";
                    break;
                case c6:
                    arr[6] = "X";
                    break;
                case c7:
                    arr[7] = "X";
                    break;
                case c8:
                    arr[8] = "X";
                    break;
            }
        }
        // if player O
        else {
            numDiv.className = 'O-marker';
            switch(clickedEl) {
                case c0:
                    arr[0] = "O";
                    break;
                case c1:
                    arr[1] = "O";
                    break;
                case c2:
                    arr[2] = "O";
                    break;
                case c3:
                    arr[3] = "O";
                    break;
                case c4:
                    arr[4] = "O";
                    break;
                case c5:
                    arr[5] = "O";
                    break;
                case c6:
                    arr[6] = "O";
                    break;
                case c7:
                    arr[7] = "O";
                    break;
                case c8:
                    arr[8] = "O";
                    break;
            }
        }
        // changement joueur
        if (playerXClass == 'current-player') {
            playerX.className = ' ';
            playerO.className = 'current-player';
        }
        else {
            playerO.className = ' ';
            playerX.className = 'current-player';
        }

        // conditions victoire
        if (turnNum >= 5) {
            winArrays("X");
            winArrays("O");
        }

        // égalité
        if (turnNum >= 10 && winArrays() == false) {
            alert("Draw !");
            newGame();
        }

    }

    else {
        alert("Case déjà jouée");
    }

    console.log(numDiv);
    console.log(arr);
}

/***** New Game ******/


function newGame() {

    // clear

    var cells = document.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++){

        var cell = document.getElementById('c'+[i]);
        cell.innerHTML = '<div id="d'+[i]+'"></div>';
    }

    setNames();

    var playerX = document.getElementById("X");
    var playerO = document.getElementById("O");


    playerX.className = 'current-player';
    playerO.className = ' ';

    var currentPlayer = "X";

    arr = ['', '', '', '', '', '', '', '', ''];
}

// conditions victoire
function winArrays(marker) {
    if (
        // ligne
    (arr[0] == marker && arr[1] == marker && arr[2]== marker ) ||
    (arr[3] == marker && arr[4] == marker && arr[5]== marker ) ||
    (arr[6] == marker && arr[7] == marker && arr[8]== marker ) ||

        // colonne
    (arr[0] == marker && arr[3]== marker  && arr[6]== marker ) ||
    (arr[1] == marker && arr[4]== marker  && arr[7]== marker ) ||
    (arr[2] == marker && arr[5]== marker  && arr[8]== marker ) ||

        // diagonale
    (arr[0] == marker && arr[4]== marker  && arr[8]== marker ) ||
    (arr[6] == marker && arr[4]== marker  && arr[2]== marker )
    )
    {
        // changement couleur victoire
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == marker) {
                var cellDiv = document.getElementById('d' + [i]);
                cellDiv.className += ' win';
            }
           else {
                var cellDiv = document.getElementById('d' + [i]);
                cellDiv.className += ' lose';
            }
        }

        if (confirm(marker + ' has won!\nNew game?') == true) {
            newGame();
        }

    }
    else {
        return false;
    }
}

console.log(arr);