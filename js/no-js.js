var elDocument = document.documentElement;
elDocument.className = elDocument.replace(/(^|\s)no-js(\s|$)/, '$1');

// This script checks to see if Javascript is enabled in the users browser, if it is not then a message is displayed to the user, if it is then the no-js class is removed from the HTML, which causes a change in the CSS rules
