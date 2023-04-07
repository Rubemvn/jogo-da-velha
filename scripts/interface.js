document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert("O jogo acabou - O vencedor foi o Jogador " + winner[playerTime]);
            updatePlacar();
        }, 20)
    }
    if (velha()) {

        setTimeout(() => {

            alert("O jogo acabou - Deu Velha");
        }, 20)
    }

    updateSquare(position);
}


function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`

}

function updatePlacar() {
    let placar1 = document.getElementById("score_p1");
    let placar2 = document.getElementById("score_p2");
    scores[playerTime] += 1;
    if (playerTime == 0) {
        placar1.innerText = ` ${scores[playerTime]} `
    } else {
        placar2.innerText = ` ${scores[playerTime]} `
    }
}


function restart() {

    let squares = document.querySelectorAll(".square");


    squares.forEach((square) => {
        let symbol = '';
        square.innerHTML = `<div class="${symbol}"></div>`

    })
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;

    if (alternarIniciador == 0) {
        alternarIniciador = 1;
        playerTime = 1;
    } else {
        alternarIniciador = 0;
        playerTime = 0;
    }
}

function zerar() {
    let placar1 = document.getElementById("score_p1");
    let placar2 = document.getElementById("score_p2");

    scores = [0, 0];
    placar1.innerText = ` 0 `
    placar2.innerText = ` 0 `

}