$(function() {

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
    },
    {
      name: 'Gabriel',
      rate: 145
    }
  ];


  // THE FUNCTION ACTS AS A FILTER
  function priceRange(person) {                        // Declare priceRange()
    return (person.rate >= 65) && (person.rate <= 90); // In range returns true
  };

  // FILTER THE PEOPLE ARRAY & ADD MATCHES TO THE RESULTS ARRAY
  var results = [];                              // Array for matching people
  results = people.filter(priceRange);           // filter() calls priceRange()


  // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
  var $tableBody = $('<tbody></tbody>');           // New table body
  for (var i = 0; i < results.length; i++) {       // Loop through matches
    var person = results[i];                       // Store current person
    var $row = $('<tr></tr>');                     // Create a row for them
    $row.append($('<td></td>').text(person.name)); // Add their name
    $row.append($('<td></td>').text(person.rate)); // Add their rate
    $tableBody.append( $row );                     // Add row to new content
  }

  $('thead').after($tableBody);                    // Add tbody after thead
});

// The script is stored in an IIFE
  // An array of objects is created, storing a list of people and key-value pairs

  // A function called priceRange() is declared and passed person as a parameter
    // The function then returns the objects with a rate greater than 65 AND lower than 90

  // An empty array is then created
  // The array is set by using the .filter() method on the people array, with the priceRage() function processing for the results

  // A jQuery object is then created with markup for the <tbody> element
  // A for each loops throught the results array, creating a new person variable with rows that will display the persons name and rate
  // The rows are then added to the <tbody>

  // The <tbody> is then added after the <thead> element
