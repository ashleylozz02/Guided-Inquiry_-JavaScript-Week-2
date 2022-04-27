//Create a program that accepts a number (1-12)
//as input and logs to the console that number
//and its corresponding month.
//For example: if the user enters the number
//3, then it should return the month “March.”
//Alert the user if they enter an invalid number
//(e.g. less than 1 or greater than 12).
let userInput = prompt("Enter your month 1-12");
//Months in array///
let months = [
  "Janury",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Agust",
  "september",
  "october",
  "november",
  "December",
];
if (userInput <= 11 || 0 <= -1 || 12 % 1) {
  console.log("months[userInput]");
} else {
  alert("Error, enter only numbers that are 1-12");
}
