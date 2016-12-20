"use strict";

var globalVariable = "This is a global variable";

function subVariableOne() {
  console.log(globalVariable + " inside of a function");
  // function subVariableTwo() {
  //   console.log(subVariableOne + " inside of another function");
  // }
}

function subVariableTwo(function) {
  console.log(subVariableOne + " inside of another function");
}
subVariableOne();
subVariableTwo(subVariableOne);
