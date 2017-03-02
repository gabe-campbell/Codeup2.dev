var compare = {                           // Declare compare object
  name: function(a, b) {                  // Add a method called name
    a = a.replace(/^the /i, '');          // Remove The from start of parameter
    b = b.replace(/^the /i, '');          // Remove The from start of parameter

    if (a < b) {                          // If value a is less than value b
      return -1;                          // Return -1
    } else {                              // Otherwise
      return a > b ? 1 : 0;               // If a is greater than b return 1 OR
    }                                     // if they are the same return 0
  },
  duration: function(a, b) {              // Add a method called duration
    a = a.split(':');                     // Split the time at the colon
    b = b.split(':');                     // Split the time at the colon

    a = Number(a[0]) * 60 + Number(a[1]); // Convert the time to seconds
    b = Number(b[0]) * 60 + Number(b[1]); // Convert the time to seconds

    return a - b;                         // Return a minus b
  },
  date: function(a, b) {                  // Add a method called date
    a = new Date(a);                      // New Date object to hold the date
    b = new Date(b);                      // New Date object to hold the date

    return a - b;                         // Return a minus b
  }
};

$('.sortable').each(function() {
  var $table = $(this);                     // This sortable table
  var $tbody = $table.find('tbody');        // Store table body
  var $controls = $table.find('th');        // Store table headers
  var rows = $tbody.find('tr').toArray();   // Store array containing rows

  $controls.on('click', function() {        // When user clicks on a header
    var $header = $(this);                  // Get the header
    var order = $header.data('sort');       // Get value of data-sort attribute
    var column;                             // Declare variable called column

    // If selected item has ascending or descending class, reverse contents
    if ($header.is('.ascending') || $header.is('.descending')) {
      $header.toggleClass('ascending descending');    // Toggle to other class
      $tbody.append(rows.reverse());                // Reverse the array
    } else {                                        // Otherwise perform a sort
      $header.addClass('ascending');                // Add class to header
      // Remove asc or desc from all other headers
      $header.siblings().removeClass('ascending descending');
      if (compare.hasOwnProperty(order)) {  // If compare object has method
        column = $controls.index(this);         // Search for column’s index no

        rows.sort(function(a, b) {               // Call sort() on rows array
          a = $(a).find('td').eq(column).text(); // Get text of column in row a
          b = $(b).find('td').eq(column).text(); // Get text of column in row b
          return compare[order](a, b);           // Call compare method
        });

        $tbody.append(rows);
      }
    }
  });
});

// The script begins by declaring an object called compare
  // The 'name' key is set to an anonymous function that has been passed a and b as parameters
    // The function uses the .replace() method with regex to remove 'the' from a and b

    // An if statement check to see if the value of a is less than b
      // If it is, then it returns -1 to the function
      // If it is not, then it uses a ternary to see if a is greater than b or if the two values are equal
        // If a is greater than b then the function returns 1
        // If a and b are equal then the function returns 0

  // The 'duration' key is to an anonymous function that has been passed a and b as parameters
    // The function uses the .split() method to split the time values at the ':' symbol
    // It then converts the values of a and b to seconds
    // The function then returns a - b

  // The 'date' key is set to an anonymous function that has been passed a and b as parameters
    // The function sets a and b to new Date objects that have been passed a and b, respectively
    // The function then returns a - b

  // The script then selects the .sortable element and uses the .each() method to call an anonymous function
    // The function creates a series of jQuery objects
      // The first is called $table and gets the value of this
      // The second is called $tbody and has the .find() method used on the $table object to find the <tbody> element and stores it to $tbody
      // The third is called $controls and has the .find() method used on the $table object to find the <th> element and stores it to $controls
      // A variable called rows is then declared and has the .find() method used on the $tbody object to find the <tr> element and chains the .toArray() method to convert the element into and array and then stores them in the rows variable

      // An event handler is then created to fire on a click event on the $controls object, triggering an anoymous function
        // The function creates a jQuery object called $header that is set to this element that was clicked
        // A variable called order is then declared and has the .data() method used on the $header object to get the value of the data-sort attribute from the <th> elements
        // A variable called column is then declared

        // An if statement is then used and has the .is() method called on the $header object to see if it has either the .ascending or .descending class
          // The .toggleClass() method is then used to swap the classes
          // The $tbody object then has the .append() method used to attach the rows array, which has had the .reverse() array method to reverse the array direction

          // If the $header object doesn't have either the .ascending or .descending
            // The $header object has the .addClass() method used to add the class 'ascending'
            // The $header object then has the .siblings() and .removeClass() methods chained to remove the 'ascending' and 'descending' classes
            // And if statement then the .hasOwnProperty() method is used on the compare object to see if it has the order property
              // If it does then it sets column to the index number of this controls

              // The .sort() method is used on the rows array to call an anonymous function and is passed a and b as parameters
                // The function then sets a to the find the <td> element that has the index number of this column and gets its text and stores it in a
                // The function then sets b to the find the <td> element that has the index number of this column and gets its text and stores it in b
                // The function then returns the compare method with the order variable on a and b

            // The $tbody object then has the .append() method used to add the rows array to the table body
