yepnope({
  test: Modernizr.inputtypes,
  yep: ['js/numPolyfill.js', 'css/number.css'],
  nope: ['js/numPolyfill.js', 'css/number.css'],
  complete : function() {
    // console.log('YepNope + Modernizr are done');
  }
});
