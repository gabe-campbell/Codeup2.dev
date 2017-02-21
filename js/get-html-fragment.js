$(function() {
  var $listHTML = $('ul').html();
  $('ul').append($listHTML);
});

// The script places the function in the shorthand for $(document).ready() to ensure the script does not run until the document has finished loading
// It then creates a variable and uses jQuery to store the html of the entire ul element
// It then selects the ul and appends the stored ul to the end of it, effectively copying and pasting the entire list
