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
    }
  ];

  // CHECKS EACH PERSON AND ADDS THOSE IN RANGE TO ARRAY
  var results = [];                                // Array for people in range
  people.forEach(function(person) {                // For each person
    if (person.rate >= 65 && person.rate <= 90) {  // Is rate in range
      results.push(person);                        // If yes add to array
    }
  });

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

// The script is placed into an IIFE

  // It then creates an array of objects called people, each with their own key-value pairs

  // An empty array called results is created
  // The .forEach() method is used on the people array and is processed by an anonymous function that has been passed person as a parameter
    // The function uses dot notation to find the person objects that have a rate between 65 and 90, if they are found the object has the .push() method applied to it to add them to the results array

  // A jQuery object is then created called $tableBody and is set to contain markup to hold a <tbody> element
  // A for each statement is created that loops through each object in the results array
    // The for each first creates a variable called person that stores the current person object from the results array
    // A jQuery object called $row is created and contains markup to contain a <tr> element
    // The .append() method is used on the $row object to append a <td> element and chains the .text() method to add the persons name and the that persons rate
    // The .append() method is used on the $tableBody to add the $row object

  // The <thead> element is then selected and has the .after() method applied to add the $tableBody object
