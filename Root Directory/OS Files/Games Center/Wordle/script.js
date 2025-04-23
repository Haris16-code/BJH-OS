let words = [
  "Zebra",
  "Sling",
  "Crate",
  "Brick",
  "press",
  "truth",
  "sweet",
  "salty",
  "alert",
  "check",
  "roast",
  "toast",
  "shred",
  "cheek",
  "shock",
  "czech",
  "woman",
  "wreck",
  "court",
  "coast",
  "flake",
  "think",
  "smoke",
  "unrig",
  "slant",
  "ultra",
  "vague",
  "pouch",
  "radix",
  "yeast",
  "zoned",
  "cause",
  "quick",
  "bloat",
  "level",
  "civil",
  "civic",
  "madam",
  "house",
  "delay",
];
let container = document.querySelector(".container");
let winScreen = document.querySelector(".win-screen");
let submitButton = document.querySelector(".submit");
let inputCount, tryCount, inputRow;
let backSpaceCount = 0;
let randomWord, finalWord;

//Detect touch device
const isTouchDevice = () => {
  try {
    //We try to create TouchEvent (it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

//Initial Setup
const startGame = async () => {
  winScreen.classList.add("hide");
  container.innerHTML = "";
  inputCount = 0;
  successCount = 0;
  tryCount = 0;
  finalWord = "";

  //Creating the grid
  for (let i = 0; i < 6; i++) {
    let inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");
    for (let j = 0; j < 5; j++) {
      //Disabled by default. We will enable one by one
      inputGroup.innerHTML += `<input type="text" class="input-box" onkeyup="checker(event)" maxlength="1" disabled>`;
    }
    await container.appendChild(inputGroup);
  }
  inputRow = document.querySelectorAll(".input-group");
  inputBox = document.querySelectorAll(".input-box");
  updateDivConfig(inputRow[tryCount].firstChild, false);
  randomWord = getRandom();
  console.log(randomWord);
};

//Get random word
const getRandom = () =>
  words[Math.floor(Math.random() * words.length)].toUpperCase();

//Update input to disabled status and set focus
const updateDivConfig = (element, disabledStatus) => {
  element.disabled = disabledStatus;
  if (!disabledStatus) {
    element.focus();
  }
};

//Logic for writing in the inputs
const checker = async (e) => {
  let value = e.target.value.toUpperCase();
  //disable current input box
  updateDivConfig(e.target, true);
  if (value.length == 1) {
    //if the word is lesss than 5 length and the button isn't backspace
    if (inputCount <= 4 && e.key != "Backspace") {
      //Attach the letter to the final word
      finalWord += value;
      if (inputCount < 4) {
        //enable next
        updateDivConfig(e.target.nextSibling, false);
      }
    }
    inputCount += 1;
  } else if (value.length == 0 && e.key == "Backspace") {
    //Empty input box anduser press Backspace
    finalWord = finalWord.substring(0, finalWord.length - 1);
    if (inputCount == 0) {
      //For first inputbox
      updateDivConfig(e.target, false);
      return false;
    }
    updateDivConfig(e.target, true);
    e.target.previousSibling.value = "";
    //enable previous and decrement count
    updateDivConfig(e.target.previousSibling, false);
    inputCount = -1;
  }
};

//When user presses enter/backspace and all the inputs are filled
window.addEventListener("keyup", (e) => {
  if (inputCount > 4) {
    if (isTouchDevice()) {
      submitButton.classList.remove("hide");
    }
    if (e.key == "Enter") {
      validateWord();
    } else if (e.key == "Backspace") {
      inputRow[tryCount].lastChild.value = "";
      finalWord = finalWord.substring(0, finalWord.length - 1);
      updateDivConfig(inputRow[tryCount].lastChild, false);
      inputCount -= 1;
    }
  }
});

//Comparison Logic
const validateWord = async () => {
  if (isTouchDevice()) {
    submitButton.classList.add("hide");
  }
  let failed = false;
  //Get all input boxes of current row
  let currentInputs = inputRow[tryCount].querySelectorAll(".input-box");
  //Check if it is a valid english word
  await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${finalWord}`
  ).then((response) => {
    if (response.status == "404") {
      console.clear();
      alert("Please Enter Valid Word");
      failed = true;
    }
  });

  //If not then stop here
  if (failed) {
    return false;
  }
  //Initially set these
  let successCount = 0;
  let successLetters = "";
  //Checks for both words
  for (let i in randomWord) {
    //if same then green
    if (finalWord[i] == randomWord[i]) {
      currentInputs[i].classList.add("correct");
      successCount += 1;
      successLetters += randomWord[i];
    } else if (
      randomWord.includes(finalWord[i]) &&
      !successLetters.includes(finalWord[i])
    ) {
      //If the letter exist in the chosen word and is not present in the success array then yellow
      currentInputs[i].classList.add("exists");
    } else {
      currentInputs[i].classList.add("incorrect");
    }
  }
  //Increment try count
  tryCount += 1;
  //If all letters are correct
  if (successCount == 5) {
    //Display the win banner after 1 second
    setTimeout(() => {
      winScreen.classList.remove("hide");
      winScreen.innerHTML = `
        <span>Total guesses: ${tryCount}</span>
        <button onclick="startGame()">New Game</button>
        `;
    }, 1000);
  } else {
    //unsuccessful so next attempt
    inputCount = 0;
    finalWord = "";
    if (tryCount == 6) {
      //all attempts wrong
      tryCount = 0;
      winScreen.classList.remove("hide");
      winScreen.innerHTML = ` <span>You lose</span>
        <button onclick="startGame()">New Game</button>`;
      return false;
    }
    //for next attempt move to first child of next row
    updateDivConfig(inputRow[tryCount].firstChild, false);
  }
  inputCount = 0;
};

window.onload = startGame();
