// This example has been updated to use Modernizr - please note the use of localstorage in lowercase
if (Modernizr.localstorage) {

  var txtUsername = document.getElementById('username'); // Get form elements
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = localstorage.getItem('username');  // Elements populated
  txtAnswer.value = localstorage.getItem('answer');      // by localstorage data

  txtUsername.addEventListener('input', function () {    // Data saved on keyup
    localstorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {      // Data saved on keyup
    localstorage.setItem('answer', txtAnswer.value);
  }, false);
}
