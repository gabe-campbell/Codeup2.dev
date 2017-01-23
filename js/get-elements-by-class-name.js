var elements = document.getElementsByClassName('hot'); //Find hot elements

if (elements.length > 2) { //If 3 or more are found
  var el = elements[2]; //Select the third item form the NodeList
  el.className = 'cool'; //Change the class to cool
}
