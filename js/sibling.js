// Select the starting point and find its siblings
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// Change the value of the siblings' class attributes
prevItem.className = 'complete';
nextItem.className = 'cool';

// This exercise demonstrates how to manipulate the DOM using its sibling properties allowing you to select elements that are on the same part of the DOM tree
