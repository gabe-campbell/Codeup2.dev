(function() {
    "use strict";

      var jqxhr = $.ajax("data/blog.json");
    jqxhr.done(function(data){
      var i = 0;
      $(data).each(function() {
        var j = 0;
        $("#postsContainer").append("<h2>" + data[i].title + "</h2><br><p>" + data[i].content + "</p>");
        $(data[i].categories).each(function() {
          $("#postsContainer").append(" | " + data[i].categories[j] + " | ");
          j++;
        });
        $("#postsContainer").append("<h4>" + data[i].date + "</h4><hr>");
        i++;
        console.log("This is post number: " + i );
      })
      console.log("The data has been loaded");
    });

    jqxhr.fail(function() {
      console.log("The data failed to load");
    });
})();
