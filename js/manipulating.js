(function(){
  "use strict";

  var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];

  console.log(daysOfTheWeek);
  daysOfTheWeek.push('Thursday');
  console.log(daysOfTheWeek);
  daysOfTheWeek.unshift('Saturday');
  console.log(daysOfTheWeek);

  //array.push == add to the end of the array
  //array.unshift == add to the beginning of the array

  var groceryList = [];

  groceryList.push('Milk');
  console.log(groceryList);
  groceryList.push('Eggs');
  groceryList.shift();
  console.log(groceryList);

  //array.pop == remove last item from array
  //array.shift == remove from the beginning of the array

  var color = ['red', 'blue', 'green', 'brown', 'yellow', 'orange'];

  var currentColor = color.indexOf('blue');
  console.log(currentColor);

  console.log(color);

  console.log("Removing the first two items from the color array");

  color.splice(0,2);
  console.log(color);

  var indexOfGreen = color.indexOf('green');
  console.log("Removing green from the list");
  color.splice(indexOfGreen, 1);
  console.log(color);

  console.log("Adding green and blue after yellow");
  var indexOfYellow = color.indexOf('yellow');
  color.splice(indexOfYellow + 1, 0, 'green', 'blue');
  console.log(color);

  console.log("Adding white after blue");
  color.splice(color.indexOf('blue') + 1, 0, 'white');
  console.log(color);

  console.log("Replacing white with black");
  color.splice(color.indexOf('white'), 1, 'black');
  console.log(color)

  console.log("Reversing the array");
  color.reverse();
  console.log(color);

  console.log("Sorting the colors alphabetically");
  color.sort();
  console.log(color);

  console.log("Sorting the colors in reverse alphabetical order");
  color.reverse();
  console.log(color);

  
})();
