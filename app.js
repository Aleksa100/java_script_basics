let paragrafOne = document.querySelector("p");

function changeParagrafOne() {
  paragrafOne.textContent = "Clicked";
}

paragrafOne.addEventListener("click", changeParagrafOne);

let inputOne = document.querySelector("input");

function inputValu(event) {
  // let enterdText = inputOne.value;
  let enterdText = event.target.value;
  console.log(enterdText);
  console.log(event);
}

inputOne.addEventListener("input", inputValu);
console.log(inputOne.addEventListener);
