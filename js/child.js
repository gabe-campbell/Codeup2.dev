// Select the starting point and fins its children
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// Change the value of the children's class attributes
firstItem.className = 'complete';
lastItem.className = 'cool';
