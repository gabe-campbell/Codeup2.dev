//Create and set variables
var greeting = 'Howdy'
var name = 'Molly'
var customSign = 'Montague House'
var totalTiles = customSign.length;
var subTotal = totalTiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var welcomeMessage = greeting + ' ' + name + ', please review your order:';

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
