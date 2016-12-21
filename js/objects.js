(function(){
    "use strict";

    // TODO: Create person object
    // var person = todo;
    var person = new Object();

    // TODO: Create firstName and lastName properties in your person object; assign your name to them

    person.firstName = "Gabe";
    person.lastName = "Campbell";

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties

    person.sayHello = function() {
      console.log("Hello " + this.firstName + " " + this.lastName);
    }

    person.sayHello();

    // Say hello from the person object.
    // person.sayHello();
})();
