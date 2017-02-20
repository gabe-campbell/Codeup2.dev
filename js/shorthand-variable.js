// METHOD 1
// This method shows how to individually create and set each variable
// It then sets a variable to the result of the operation
var price = 5;
var quantity = 14;
var total = price * quantity;

/*Method 2
// This method creates each variable and the individually sets them
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

/*Method 3
// This method creates and sets the variables to be used in the operation then sets creates and sets the variable to hold the result
var price = 5, quantity = 14;
var total = price * quantity;
*/

//Write the total into the element with an id of cost

var el  = document.getElementById('cost');

// Gets the element with an id of cost

el.textContent = '$' + total;

// Replace the content of this element

// This exercise shows different methods of creating and setting elements
