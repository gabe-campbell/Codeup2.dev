var table = 3;
var operator = 'multiplication';
var i = 1;
var msg = '';

if (operator === 'addition') {
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table);
    msg += '<br>';
    i++;
  }
} else {
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table);
    msg += '<br>'
    i++;
  }
}

var el = document.getElementById('blackboard');
el.innerHTML = msg;

// This exercise uses various logical operators to display different mathematical tables
