// NOTE: Because this example loads external data it will not work locally in some browsers
// You can try it online at http://javascriptbook.com/code/c09
// or run it on your own web server
function TimetableCtrl($scope, $http) {
  $http.get('js/items.json')
  .success(function(data) { $scope.sessions = data.sessions; })
  .error(function(data) { console.log('error'); });
}

// This script begins by creating a function that references the ng-controller element in the HTML, it takes $scope and $http as parameters
  // The first line in the function get the filepath of the JSON file that is to be used to for the data in the page using the .get() method
    // If the data file is successfully loaded then an anonymous function that has been passed data takes the JSON and sets the $scope.sessions to the passed data.sessions, with sessions being the object name for the key-value pairs in the JSON file
    // This is then used in the HTML page with the ng-repeat property
      // This tells the page to treat the data as if it is being used in a loop
      // For each 'session in sessions', or one item out of a set of many items, a table row is created with the first table cell being the time of the event, the next being the title of the event, and then finally the description of the event
      // Once all the data from one key value pair has been used, the page continues until each row of the page is populated
    // If the data file does NOT load successfully, then an error is logged and an error message can be displayed to the user
