// Create and name the variable
// Tell the interpreter it is an array
// Assign values inside the parentheses

var colors = new Array('white',
                      'black',
                      'custom');

// Show the first item from the array

var el = document.getElementById('colors');
el.textContent = colors[0];

// This exercise shows to another method to create and set an array using an array constructor and then uses the array index to display the color
