'use strict';

var gradeOne = 70;
var gradeTwo = 80;
var gradeThree = 95;

var assignments = 0;

var averageGrade = (gradeOne + gradeTwo + gradeThree)/3;

if (averageGrade >= 80) {
  console.log("You're Awesome!");
} else {
  console.log("You need to study more...");
}

var ryan = 250;
var cameron = 180;
var george = 320;

var coupon = 200;

if (ryan < 200) {
  console.log("Ryan");
  console.log("Sorry, coupon cannot be applied.");
  console.log("Payment due: $" + ryan);
} else {
  console.log("Ryan");
  console.log("Payment due: $" + (ryan - coupon));
}

if (cameron < 200) {
  console.log("Cameron");
  console.log("Sorry, coupon cannot be applied.");
  console.log("Payment due: $" + cameron);
} else {
  console.log("Cameron");
  console.log("Payment due: $" + (cameron - coupon));
}

if (george < 200) {
  console.log("George");
  console.log("Sorry, coupon cannot be applied.");
  console.log("Payment due: $" + george);
} else {
  console.log("George");
  console.log("Payment due: $" + (george - coupon));
}

var flipACoin = Math.floor(Math.random()*2);
if (flipACoin == 0) {
  console.log("Buy the house!");
} else {
  console.log("Buy the car!");
}

var flipACoinTernary = (Math.floor(Math.random()*2) == 0) ? console.log("Buy the house!") : console.log("Buy the car!");
