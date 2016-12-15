'use strict';

var i = 0;

while (i < 10) {
  console.log('while loop iteration #' + i);
  i++;
}

//runs until i = 10, but only prints while i < 10


var e = 10;

while (e < 10) {
  console.log('while loop iteration #' + e);
  e++;
}

//doesn't run because e is never less than 10

var d = 10;

do {
  console.log('while loop iteration #' + d);
  d++;
} while (d < 10);

console.log('\n //////////////////////////////////////////// \n\n');

var allCones = Math.floor(Math.random() * 50) + 50;

console.log('I have ' + allCones + ' cones to sell before I can go home!');
console.log("\n");

do {
  var cones = Math.floor(Math.random() * 5) + 2;
  console.log('A wild customer appears and wants to buy ' + cones + ' cones!');
  if (allCones >= cones) {
    console.log('The customer buys ' + cones +  ' cones!');
    allCones = allCones - cones;
    console.log('I have ' + allCones + ' cones left to sell!');
    console.log("\n");
  } else if (allCones < cones) {
    console.log('Sorry I can only sell ' + allCones + ' cones.');
    console.log('The customer decides to buy the rest of your cones!');
    allCones = allCones - cones;
  }
} while (allCones > 0);

if (allCones <= 0) {
  console.log("Yay I can go home!");
}

console.log('\n //////////////////////////////////////////// \n\n');

var i = 1;
var power = 2;

while (i <= 16) {
 console.log(power + "\n");
 power = power * 2;
 i++;
}
