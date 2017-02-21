$(function() {
  $('li').each(function() {
    var ids = this.id;
    $(this).append(' <span class="order">' + ids + '</span>');
  });
});

// This script selects all of the li elements and to each applies the anonymous function
// The function creates a variable of ids and stores this li id for each element
// It then takes this li and appends a span tag containing this stored id
// This makes it so that the id of each li element is added to the end of its li
