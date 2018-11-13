// API key
const APIKey = '482352b90547e9e4ea9f55ee0c352d57';

// URL
const corsAnywhere = "http://cors-anywhere.herokuapp.com/";
let queryURL = `${corsAnywhere}https://api.darksky.net/forecast/${APIKey}/33.7490,-84.3880?exclude=minutely,alerts,flags&unit=us`;

//AJAX call to the darksky API
$.ajax({
  url: queryURL,
  method: 'GET'
})
// We store all of the retrieved data inside of an object called "response"
.then(function(data) {
  console.log(queryURL);
 console.log(data);
  
});