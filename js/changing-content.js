$(function() {
  $('li:contains("pine")').text('almonds');
  $('li.hot').html(function() {
    return '<em>' + $(this).text() + '</em>';
  });
  $('li#one').remove();
});

// This script selects all li elements that contain the word 'pine' and changes the text to almonds
// It then selects all li with a class of hot, takes the html within and uses this to take the text and places it within em tags
// Finally, it selects all li elements with an id of 'one' and removes them from the DOM
