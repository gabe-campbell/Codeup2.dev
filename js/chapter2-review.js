// Create and set string variables
var greeting = 'Howdy'
var name = 'Molly'
var customSign = 'Montague House'

// Use the array .length property to get the number of elements in the array then uses this number in the calculation
var totalTiles = customSign.length;
var subTotal = totalTiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// String concatenation to create the message
var welcomeMessage = greeting + ' ' + name + ', please review your order:';

// Gets the desired elements from the document and then sets it to the variables created above
var elWelcome = document.getElementById('welcome');
elWelcome.textContent = welcomeMessage;

var elCustom = document.getElementById('customSign');
elCustom.textContent = customSign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = totalTiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal;

// This exercise demonstrates string and numeric variable manipulation to display custom content to the page
