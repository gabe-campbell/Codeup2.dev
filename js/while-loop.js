var i = 1;    // Set counter to 1
var msg = ''; // Create Message

// Store 5 times table in a variable
while (i < 10 ) {
  msg += i + ' x 5 = ' + (i * 5) + '<br>';
  i++;
}

document.getElementById('answer').innerHTML = msg;

// This exercise uses a while loop to go display the message, perform the calculation, and then iterate to the next line while the conditional is still able to pass
