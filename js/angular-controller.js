function BasketCtrl($scope) {
  $scope.description = 'Single ticket';
  $scope.cost = 8;
  $scope.qty = 1;
}

// This script, along with the ng- directives included in the HTML page allow the page to use Angular functions and properties to control the properties of the page
  // A function called BasketCtrl is declared and set with the $scope object being passed into it
  // The function is set to have the same name as its corresponding ng-controller element in the HTML
    // The $scope object takes the element and uses dot notation to select the corresponding element that will be updated
    // $scope.description is set to a string that controls the desscription of the item being purchased, its HTML equivalent looks like: {{ description }}
    // $scope.cost is set to the value of a single ticket, its HTML equivalent looks like: {{ cost }}
    // $scope.qty is set to how many of the item is going to be purchased, its HTML equivalent uses the ng-model attribute to bind the data in the input, in this case its a number select to choose the amount of tickets
    // the qty and cost are then used to calculate the subtotal and the currency attribute is used to format the result as a monetary value
