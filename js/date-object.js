//Create a variable to hold a new date object (defaults to now)
var today = new Date();
//create a variable to hold the year this year
var year = today.getFullYear();

//Create a variable called el to hold the element whose id attribute has a vlaue of footer
var el = document.getElementById('footer');
//write the year into that element
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';
