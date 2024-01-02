let number = 0;
let sleeve = 0;
let turnPlayer = 0;
let score = [0, 0];

const dice = document.querySelector("#dice");
const roll = document.querySelector("#plays");
const hold = document.querySelector("#download");
const newGame = document.querySelector("#new-game");
const player1 = document.querySelector(".player-0");
const player2 = document.querySelector(".player-1");

const rollDice = function () {
  number = Math.floor(Math.random() * 6) + 1;
  dice.innerHTML = `<img class="dice" src="./images/dice/dice-${number}.svg" alt="dice ${number}">`;
  if (number !== 1) {
    sleeve += number;
    document.querySelector(`#current-${turnPlayer}`).textContent = sleeve;
  } else {
    changePlayer();
  }
};

const changePlayer = function () {
  sleeve = 0;
  document.querySelector(`#current-${turnPlayer}`).textContent = 0;
  turnPlayer = turnPlayer === 0 ? 1 : 0;
  player1.classList.toggle("turn-player");
  player2.classList.toggle("turn-player");
};

const holdScore = function () {
  score[turnPlayer] += sleeve;
  document.querySelector(`#score-${turnPlayer}`).textContent = score[turnPlayer];
  if (score[turnPlayer] >= 100) {
    document.querySelector(`.playerName-${turnPlayer}`).classList.add("winner-player");
    document.querySelector(`.playerName-${turnPlayer}`).innerHTML = `<p>WINNER !</p>`;
  } else {
    changePlayer();
  }
};

const replay = function () {
  document.location.reload();
};

roll.addEventListener("click", rollDice, false);
hold.addEventListener("click", holdScore, false);
newGame.addEventListener("click", replay, false);