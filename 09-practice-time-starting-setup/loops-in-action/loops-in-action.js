let userNumberButton = document.querySelector("#calculator button");
let number = 0;

function numberSum() {
  let numberValue = document.getElementById("calculated-sum");
  let userNumberElement = document.getElementById("user-number");
  let userNumber = userNumberElement.value;
  for (let i = 0; i <= userNumber; i++) {
    number = number + 1;
  }
  numberValue.textContent = number;
  numberValue.style.display = "block";
}

userNumberButton.addEventListener("click", numberSum);

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

const userData = {
  firstName: "Aleksa",
  lastName: "Radulovic",
  age: 15,
};
const displayUserDataButton = document.querySelector("#user-data button");
const outputUserDateList = document.getElementById("output-user-data");

function displayUserData() {
  for (let key in userData) {
    let outputText = key + ": " + userData[key];
    const newListItemElement = document.createElement("li");
    newListItemElement.textContent = outputText;
    outputUserDateList.append(newListItemElement);
  }
}

displayUserDataButton.addEventListener("click", displayUserData);

const userRendomNumberButton = document.querySelector("#statistics button");

function roleDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function displayRoldDice() {
  const userTargetNumber = document.getElementById("user-target-number");
  const displayDiceRolesUl = document.getElementById("dice-rolls");
  let hasRoledTheNumber = false;
  let numberRoles = 0;
  while (!hasRoledTheNumber) {
    let diceRool = roleDice();
    hasRoledTheNumber = diceRool == userTargetNumber;
    numberRoles++;
    let newListItemElement = document.createElement("li");
    let outputText = "Rool " + numberRoles + ": " + diceRool;
    newListItemElement.textContent = outputText;
    displayDiceRolesUl.append(newListItemElement);
  }
}

userRendomNumberButton.addEventListener("click", displayRoldDice());
