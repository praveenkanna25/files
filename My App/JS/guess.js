let randomNum;
let score = 20;
let guessNumber = document.querySelector(".number");
let chkBtn = document.getElementById("checkBtn");
let inputField = document.querySelector(".guess");
let messageResult = document.querySelector(".message");
let scoreData = document.querySelector(".score");

generateRndNumber();
function generateRndNumber() {
  randomNum = math.floor(math.random() * 20) + 1;
  console.log(randomNum);
  guessNumber.textContent = randomNum;
}
let checkGuessNumber = function () {
  let inputValue = inputField.value;

  if (Number(inputValue) === randomNum) {
    messageResult.textContent = "Correct Guess";
    document.body.style.backgroundColor = "green";
    inputField.value;

    generateRndmNum();
  } else if (inputValue < randomNum) {
    messageResult.textContent = "Your guess is low";
    score--;

    scoreData.textContent = score;
  } else if (inputValue > randomNum) {
    messageResult.textContent = "Your guess is high";
    score--;
    scoreData.textContent = score;
  }
};
chkBtn.addEventListener("click", checkGuessNumber);
