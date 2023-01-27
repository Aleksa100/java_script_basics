// let productInputElement = document.getElementById("product-name");
// let TextLenght = document.getElementById("remaining-chars");
// let maxAllowedChars = productInputElement.maxLenght;

// function updateRemainingChras(event) {
//   //   let enteredText = productInputElement.value;
//   //   let enteredTextLenght = enteredText.lenght;

//   //   let remainingCharsLeft = maxLenght - enteredTextLenght;
//   let enteredText = event.target.value;
//   let enteredTextLength = enteredText.length;

//   let remainingCharacters = 60 - enteredTextLength;
//   TextLenght.textContent = remainingCharacters;
// }

const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
