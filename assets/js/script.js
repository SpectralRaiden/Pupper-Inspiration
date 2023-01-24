$("document").ready(function() {

    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  
    loadQuote();
  
    $("#newQuote").on("click",function() {
      $("#quote-block").hide();
      loadQuote();
    });
}

    function loadQuote() {
        var random = Math.floor(Math.random()*10);
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(result){
          //response data are now in the result variable
          //$(".quote").css("display","none");
          //   $(".author").css("display","none");
          $(".quote").html(result.quoteText);
      
          $(".author").html(result.quoteAuthor);
    }
}




// fetch("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", {
//     method: 'getQuote',
//     format: 'json',
//     lang: 'en',
// })
// .then (function (response) {
//     return response.json();
// })
=======

/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

var request = require('request'); // "Request" library

var client_id = 'CLIENT_ID'; // Your client id
var client_secret = 'CLIENT_SECRET'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});
=======
fetch("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
})
.then (function (response) {
    return response.json();
})

// access data points in response
// append data to JS
// 'append' command

