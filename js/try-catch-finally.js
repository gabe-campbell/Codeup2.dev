var feed = document.getElementById('feed');

// Correct feed
var response = '{"deals": [{"title": "Farrow and Ball","description": "New season 2.5l tins are all reduced this week","price": 30,"link": "http://www.example.com/farrow-and-ball/"},{"title": "Siecle Paints from the UK","description": "Probably the best named paints in the world","price": 28,"link": "http://www.example.com/siecle/"},{"title": "Kelly Hoppen","description": "Now stocking paints by interior designer Kelly Hoppen","price": 42,"link": "http://www.example.com/kelly-hoppen/"}]}';
// Feed with errors - comment the next line out to see it working
// response = '{"deals": [{"title": "Farrow and Ball","description": "New season 2.5l '; // JSON data

if (response) {
  try {
    var dealData = JSON.parse(response);              // Try to parse JSON
    showContent(dealData);                            // Show JSON data
  } catch(e) {
    var errorMessage = e.name + ' ' + e.message;      // Create error msg
    console.log(errorMessage);                        // Show devs msg
    feed.innerHTML = '<em>Sorry, could not load deals</em>';// Show users msg
  } finally {
    var link = document.createElement('a');           // Add refresh link
    link.innerHTML = '<a href="JNJ try-catch-finally.html">reload</a>';
    feed.appendChild(link);
  }
}

function showContent(dealData) {
  var newContent = '';
  for (var i in dealData.deals) {
    newContent += '<div class="deal">';
    newContent += '<h2>' + dealData.deals[i].title + '</h2>';
    newContent += '<p>' + dealData.deals[i].description + '</p>';
    newContent += '<a href="' + dealData.deals[i].link + '">';
    newContent += ' ' + dealData.deals[i].link;
    newContent +='</a>';
    newContent += '</div>';
  }
  feed.innerHTML = newContent;
}

// The script begins by a variable that references the #feed element
// A variable called response is created and set to hold a block of JSON data
// The next line set the response variable to another line of JSON data, but it has an error in it

// An if statement tests to see if the response variable has a value, and will run the code if it does
  // The if statement has a try/catch/finally that will run one of the first two lines of code depending on if the code is able to successfully run, and if it can't then it'll run code to catch the error, and one line to always run
  // The try statement will use the JSON.parse() method on the response data and sets it to a variable called dealData, the showContent() function is called and passed dealData as a parameter
  // The catch statement will create and set a variable called errorMessage that till hold the name and message for the error and then log it to the console. The #feed element then has its HTML set to display an error message to the user
  // The always statement will create an <a> tag and then set its href to reload the page, it then appends the link to the bottom of the feed

// A function called showContent() is created and passed dealData as a parameter
  // This function creates a variable and sets it to an empty string
  // It then creates a for loop to loop through the deals in the parsed dealData variable
    // The newContent string is then updated to build the message that will be displayed
  // The HTML of the feed element is the set to the value of newContent
