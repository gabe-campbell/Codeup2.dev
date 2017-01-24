var elements = document.getElementsByTagName('li'); // Find <li> elements

if (elements.length > 0) { // If 1 or more elements are found

    var el = elements[1]; // Select the first one using array syntax
    el.className = 'cool';  // Change the value of the class attribute
}
