'use strict';

var whatAmI = "I am a string";

if (typeof whatAmI === "boolean") {
  console.log("You are a boolean.");
} else if (typeof whatAmI === "number") {
  console.log ("You are a number.");
} else if (typeof whatAmI === "string") {
  console.log("You are a string.");
} else if (typeof whatAmI === "object") {
  console.log("You are an object.");
} else if (typeof whatAmI === "undefined") {
  console.log("You are undefined.")
} else {
  console.log("I haven't the faintest what you are...")
}

var whatAmI2 = "I am a string";

switch (typeof whatAmI2) {
  case "boolean":
    console.log("You are a boolean.");
    break;
  case "number":
    console.log("You are a number.");
    break;
  case "string":
    console.log("You are a string.");
    break;
  case "function":
  case "object":
    console.log("You are an object.");
    break;
  case "undefined":
    console.log("You are undefined");
    break;
  default:
    console.log("I haven't got a clue...");
}

var luckyNumber = Math.floor(Math.random()*6);
var discount;

switch(luckyNumber) {
  case 1:
    discount = .9;
    console.log("10% Discount!");
    console.log("Amount Due: $" + (60 * discount));
    break;
  case 2:
    discount = .75;
    console.log("25% Discount!");
    console.log("Amount Due: $" + (60 * discount));
    break;
  case 4:
    discount = .5;
    console.log("50% Discount!");
    console.log("Amount Due: $" + (60 * discount));
    break;
  case 5:
    discount = 0;
    console.log("100% Discount!");
    console.log("Amount Due: $" + (60 * discount));
    break;
  default:
    console.log("Sorry, no discount for you!");
}

var monthNumber = Math.floor(Math.random()*12+1);

switch(monthNumber) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Oops, something went wrong...");
}
