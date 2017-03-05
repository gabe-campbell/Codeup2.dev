(function() {
  var type  = document.getElementById('equipmentType');// Type select box
  var model = document.getElementById('model');        // Model select box
  var cameras = {                                      // Object stores cameras
    bolex: 'Bolex Paillard H8',
    yashica: 'Yashica 30',
    pathescape: 'Pathescape Super-8 Relax',
    canon: 'Canon 512'
  };
  var projectors = {                                  // Store projectors
    kodak: 'Kodak Instamatic M55',
    bolex: 'Bolex Sound 715',
    eumig: 'Eumig Mark S',
    sankyo: 'Sankyo Dualux'
  };

  // WHEN THE USER CHANGES THE TYPE SELECT BOX
  addEvent(type, 'change', function() {
    if (this.value === 'choose') {                // No selection made
      model.innerHTML = '<option>Please choose a type first</option>';
      return;                                     // No need to proceed further
    }
    var models = getModels(this.value);           // Select the right object

    // LOOP THROUGH THE OPTIONS IN THE OBJECT TO CREATE OPTIONS
    var options = '<option>Please choose a model</option>';
    var key;
    for (key in models) {                     // Loop through models
      options += '<option value="' + key + '">' + models[key] + '</option>';
    } // If an option could contain a quote, key should be escaped (see pXXX)
    model.innerHTML = options;                    // Update select box
  });

  function getModels(equipmentType) {
    if (equipmentType === 'cameras') {            // If type is cameras
      return cameras;                             // Return cameras object
    } else if (equipmentType === 'projectors') {  // If type is projectors
      return projectors;                          // Return projectors object
    }
  }
}());

// The script is placed into an IIFE
  // It bgeins by declaring and setting a series of variables
    // The first is called type and is set to the #equipmentType element
    // The second is called model and is set to the #model element
    // The third is called cameras and is set to an object containing a series of key/value pairs with the name of the camera and its full name
    // The fourth is called projectors ad is set to an object containing a series of key/value pairs with the name of the projector and its full name

  // The addEvent() function is then called on the type element to fire on a change, triggering an anoymous function
    // The function uses an if statement to see if the value of this selected option from the select element is equal to the default choose option
      // If so, then the text of the option is set to prompt the user to select an option
      // The function then returns

    // A variable called models is declared and is set to the getModels() function value to get the value of the currently selected option

    // A variable called options is then declared and set to contain markup for an option element
    // A variable called key is then declared
    // A for loop then loops through all of the keys in the currently selected object array and displays the name of the key value pairs that are within
    // The innerHTML of the model variable is then set to the options markup

  // The getModels() function is then declared and passed the equipmentType attribute as a parameter
    // An if statement then checks to see if the equipmentType is equal to 'cameras', if it is then it returns the cameras object
    // Else if the equipmentType is equal to 'projectors', then it returns the projectors object
