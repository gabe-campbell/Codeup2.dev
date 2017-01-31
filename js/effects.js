$(function() {

  $('h2').hide().slideDown();
  var $li = $('li');
  $li.hide().each(function(index) {
    $(this).delay(500 * index).fadeIn(150);
  });

  $li.on('click', function() {
    $(this).fadeOut(700);
  });

});
