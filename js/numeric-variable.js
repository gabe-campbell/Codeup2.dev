// The script starts by creating three variables

var price;
var quantity;
var total;

// Assign value to the price and quantity variables

price = 5;
quantity = 14;

// Calculate the total by multiplying the price by quantity

total = price * quantity;

// Creates variable el and gets the element with an id of cost

var el = document.getElementById('cost');

// Sets the text of el to display the total

el.textContent = '$' + total;

// This exercise demonstrates creating variables to hold numeric values, and then uses those values to perform operations and then displays the result to the page
