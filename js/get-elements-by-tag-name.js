var elements = document.getElementsByTagName('li'); // Find <li> elements

if (elements.length > 0) { // If 1 or more elements are found

    var el = elements[1]; // Select the first one using array syntax
    el.className = 'cool';  // Change the value of the class attribute
}

// Similar to the class name exercise, this exercise creates a node list of all the elements that match the specified tag and then changes the specified element
