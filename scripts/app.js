const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
    {
        name: "",
        symbol: "X",
    },
    {
        name: "",
        symbol: "O",
    },
];
const playerConfigOverLayElement = document.querySelector("#config-overlay");
const backdropElement = document.querySelector("#backdrop");
const addPlayerOneBtnElement = document.querySelector("#edit-player-1-btn");
const addPlayerTwoBtnElement = document.querySelector("#edit-player-2-btn");
const cancelConfigButtonElement = document.querySelector("#cancel-config-btn");
const formElement = document.querySelector("form");
const errorsOutputElement = document.querySelector("#config-error");
const startNewGameBtnElement = document.querySelector("#start-game-btn");
const gameAreaElement = document.querySelector("#active-game");
const gameFieldElements = document.querySelectorAll("#game-board li");
const activePlayerNameElement = document.querySelector("#active-player-name");
const gameOverElement = document.querySelector('#game-over');
const gameBoardElement = document.querySelector('#game-board');

addPlayerOneBtnElement.addEventListener("click", openPlayerConfig);
addPlayerTwoBtnElement.addEventListener("click", openPlayerConfig);
cancelConfigButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);
startNewGameBtnElement.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener("click", selectGameField);
}
