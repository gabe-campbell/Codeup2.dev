// This example has been updated to use Modernizr - please note the use of of lowercase in sessionstorage
if (Modernizr.sessionstorage) {

  var txtUsername = document.getElementById('username'),    // Get form Elements
      txtAnswer = document.getElementById('answer');

  txtUsername.value = sessionstorage.getItem('username');   // Elements populated
  txtAnswer.value = sessionstorage.getItem('answer');       // by sessionstorage

  txtUsername.addEventListener('input', function() {        // Save data on keyup
    sessionStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {         // Save data on keyup
    sessionstorage.setItem('answer', txtAnswer.value);
  }, false);
}
