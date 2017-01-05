//METHOD 1
var price = 5;
var quantity = 14;
var total = price * quantity;

/*Method 2
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

/*Method 3
var price = 5, quantity = 14;
var total = price * quantity;
*/

//Write the total into the element with an id of cost
var el  = document.getElementById('cost');
//Gets the element with an id of cost
el.textContent = '$' + total;
//Replace the content of this element

/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 20, but note the security issues on p228-231
el.innerHTML = '$' + total;
*/
