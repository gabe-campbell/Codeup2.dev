"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var userName;
function askName() {
  userName = prompt("What is your name?");
  while (userName === null || userName === "") {
    userName = prompt("Please enter your name.");
  }

  alert("Welcome " + userName + "!");

  var yesOrNo = prompt("Do you like pizza?");

  if (yesOrNo === "yes" || yesOrNo === "Yes" || yesOrNo === "YES") {
    alert(userName + ", you seem like a cool dude.");
  } else if (yesOrNo === "no" || yesOrNo === "No" || yesOrNo === "NO") {
    alert(userName + ", I thought you were better than that.");
  }
}

askName();
// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
