$(function() {

  // Get the background color of the first list items
  var backgroundColor = $('li').css('background-color');

  // Write what the background color was after the list
  $('ul').append('<p>Color was: ' + backgroundColor + '</p>');

  // Set several properties on all list items
  $('li').css({
    'background-color': '#c5a996',
    'border': '1px solid #fff',
    'color': '#000',
    'text-shadow': 'none',
    'font-family': 'Georgia',
    'padding-left': '+=75'
  });
});

// This function creates a variable and stores the background-color of the first li element
// It then selects the ul and appends a p tag containing the stored background-color
// Finally, it selects all li elements and sets a series of new CSS rules to each one
