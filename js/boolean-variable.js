// Create variables and assign their values

var inStock;
var shipping;
inStock = true;
shipping = false;

// Get the element that has an id of stock

var elStock = document.getElementById('stock');

// Set class name with value of inStock variable

elStock.className = inStock;

// Get the element that has an id of shipping

var elShip = document.getElementById('shipping');

// Set class name with value of shipping variable

elShip.className = shipping;

// This exercise shows how to create variables to hold boolean values
// The script then sets the classname of the element to its corresponding boolean values
// The CSS class selector then displays the appropriate image to the element
