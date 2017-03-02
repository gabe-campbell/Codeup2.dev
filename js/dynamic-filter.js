(function() {

  // STORE EACH PERSON AS AN OBJECT IN AN ARRAY
  var people = [
    {                                              // Each person is an object
      name: 'Casey',                               // It holds name and rate
      rate: 60
    },
    {
      name: 'Camille',
      rate: 80
    },
    {
      name: 'Gordon',
      rate: 75
    },
    {
      name: 'Nigel',
      rate: 120
    }
  ];

  var rows = [],                        // rows array
      $min = $('#value-min'),           // Minimum text input
      $max = $('#value-max'),           // Maximum text input
      $table = $('#rates');             // The table that shows results

  function makeRows() {                 // Create table rows and the array
    people.forEach(function(person) {   // For each person object in people
      var $row = $('<tr></tr>');        // Create a row for them
      $row.append( $('<td></td>').text(person.name) ); // Add their name
      $row.append( $('<td></td>').text(person.rate) ); // Add their rate
      rows.push({ // Create rows array which links people objects to table rows
        person: person,                 // Reference to the person object
        $element: $row                  // Reference to row as jQuery selection
      });
    });
  }

  function appendRows() {               // Adds rows to the table
    var $tbody = $('<tbody></tbody>');  // Create <tbody> element
    rows.forEach(function(row) {        // For each object in the rows array
      $tbody.append(row.$element);      // Add the HTML for the row
    });
    $table.append($tbody);              // Add the rows to the table
  }

  function update(min, max) {           // Update the table content
    rows.forEach(function(row) {        // For each row in the rows array
      if (row.person.rate >= min && row.person.rate <= max) { // If in range
        row.$element.show();            // Show the row
      } else {                          // Otherwise
        row.$element.hide();            // Hide the row
      }
    });
  }

  function init() {                     // Tasks when script first runs
    $('#slider').noUiSlider({           // Set up the slide control
      range: [0, 150], start: [65, 90], handles: 2, margin: 20, connect: true,
      serialization: {to: [$min, $max],resolution: 1}
    }).change(function() { update($min.val(), $max.val()); });
    makeRows();                           // Create table rows and rows array
    appendRows();                         // Add the rows to the table
    update($min.val(), $max.val());     // Update table to show matches
  }

  $(init);                              // Call init() when DOM is ready
}());

// The function is stored in an IIFE
  // An array of objects is created

  // An array and a series of jQuery objects are declared and set to reference document elements

  // A function called makeRows is then declared
    // The function uses a .forEach() on the people array to call an anonymous function that has been passed person as a parameter
      // A new jQuery object is then created and set to hold markup for a <tr> elements
      // The $row object then has a <td> element added with the persons name and the persons rate
      // the .push() method is used on the rows array to add person: person and $element: $row

  // A function called appendRows() is then declared
    // The function creates a jQuery object that holds markup for a <tbody> element
    // The .forEach() method is used on the rows array to call an anonymous function that has been passed row as a parameter
      // The .append() method is then used on the $tbody object to add the $element reference from the rows array
    // The .append() method is then used on the $table object to add the $tbody object

  // The update() function is declared and passed min and max as parameters
    // The .forEach() method is called on the rows array, calling an anoynmous that has been passed row as a parameter
      // An if statement checks to see what elements are greater than the min value and less than the max value
        // If the row meets that criteria the element has the .show() method called on it
        // If the row does not meet the criteria it has the .hide() method called on it


// The init() function is then declared
  // The #slider element is selected and hs the noUiSlider() method called on it, creating the settings for the slider
  // The .change method is chained to the slider method to act as an event listener to call the update function whenever there is a change event on the sliders
  // The makeRows() function is then called
  // The appendRows() function is then called
  // The update() function is called and passed the min and max vals as arguments

// Once the DOM is ready, the init function is called once in order to initialized the slider and to create the rows and to add them to the table and then the upate function is called to set the initial values for the slider
