for (let i = 0; i < 10; i++) {
  console.log(i);
}
const usreNames = ["Max", "Aleksa", "Andrej"];

for (const usreName of usreNames) {
  console.log(usreName);
}

const userInfos = {
  name: "Aleksa",
  age: 15,
  isAdmin: true,
};

for (const userInfo in userInfos) {
  console.log(userInfos[userInfo]);
}

let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Whould you like to quit");
}
