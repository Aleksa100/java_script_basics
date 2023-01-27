// let hobys = ["Kosarka", "Fucal", "Nigeri"];
// let gritingText = "I am Aleksa";
// let myAge = 38;
// let job = {
//   work: "niga",
//   salerz: 500,
//   // place: "Pogorica",
// };
// console.log(gritingText);

// let adultYears;

// function calculateAdultYears(userAge) {
//   return userAge - 18;
// }

// adultYears = calculateAdultYears(myAge);
// console.log(adultYears);

// myAge = 40;
// adultYears = calculateAdultYears(myAge);
// console.log(adultYears);

// console.dir(window.document);

// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("Anchor-element");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("a");
anchorElement.href = "https://google.com";

let newElementOne = document.createElement("a");

let paregrafOne = document.querySelector("p");
paregrafOne.append(newElementOne);
newElementOne.href = "https://google.com";
newElementOne.textContent = " New link";

let firstH1Element = document.querySelector("h1");
firstH1Element.remove();

paregrafOne.parentElement.append(paregrafOne);

console.log(paregrafOne.innerHTML);

paregrafOne.innerHTML = "This is <strong>important</strong>";
