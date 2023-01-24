// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

// let courseName = "100 days of web dev";
// let coursePrice = 60;
// let courseGoals = ["HTML", "CSS", "Java script"];

// alert(courseName);
// alert(coursePrice);
// alert(courseGoals);

let onlineCourse = {
  name: "learn HTML",
  price: 50,
  mainGoals: ["learn HTML", "learn CSS", "learn Java script"],
};

alert(onlineCourse.name);
alert(onlineCourse.price);
alert(onlineCourse.mainGoals);
alert(onlineCourse.mainGoals[1]);

function getListItem(arrye, arryenum) {
  let listItem = arrye[arryenum];
  return listItem;
}

let firstGoal = getListItem(onlineCourse.mainGoals, 0);
alert(firstGoal);
