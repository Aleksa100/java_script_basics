let hobys = ["Kosarka", "Fucal", "Nigeri"];
let gritingText = "I am Aleksa";
let myAge = 38;
let job = {
  work: "niga",
  salerz: 500,
  place: "Pogorica",
};
console.log(gritingText);

let adultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

adultYears = calculateAdultYears(myAge);
console.log(adultYears);

myAge = 40;
adultYears = calculateAdultYears(myAge);
console.log(adultYears);
