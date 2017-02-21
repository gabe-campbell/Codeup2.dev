// Select the starting point and find its children
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// Change the value of the children's class attributes
firstItem.className = 'complete';
lastItem.className = 'cool';


// Creates a nodelist and selects the first and only item and then accesses the first and last children of the selected element
