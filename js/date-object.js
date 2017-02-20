// Create a variable to hold a new date object (defaults to now)
var today = new Date();

// Create a variable to hold the year this year
var year = today.getFullYear();

// Create a variable called el to hold the element whose id attribute has a vlaue of footer
var el = document.getElementById('footer');

// Write the year into that element
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';

// This exercise uses properties of the Date object to display information to the page
