(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.

    planetsArray = planetsString.split('|');

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    planetsString = planetsArray.join('<br>');

    console.log(planetsString);
    //       Why might this be useful?
    // Because it can be converted to html

    // Bonus: Create a second string that would display your planets in an undordered list.
    function makeString() {
      console.log("<ul>");
      planetsArray.forEach(function(element, index, array){
      console.log("    <li>" + element + "</li>");
      });
    console.log("</ul>");
    };

    makeString();

    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
})();
