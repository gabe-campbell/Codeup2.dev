yepnope({
  test: Modernizr.inputtypes.number,
  yep: ['js/numPolyfill.js', 'css/number.css'],
  nope: ['js/numPolyfill.js', 'css/number.css'],
  complete : function() {
    // console.log('YepNope + Modernizr are done');
  }
});

// This script uses Modernizr and yepnope to see if the browser supports input types with a value of number, and will run a different script and CSS file if it is or isn't supported
// The script then logs a message to the console once modernizer and yepnope have completed their browser support check
