const api_url ="https://zenquotes.io/api/random/";
const ul = document.querySelector('.quote-list');

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data[0].q);

  ul.innerHTML += `<li>${data[0].q}</li>`;
}

getapi(api_url);

// const inspQuotes = document.getElementById('inspQuotes');

// fetch('https://zenquotes.io/api/random', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin':'*'
//   }
// })
//   .then(response => response.json())
//   .then(data => {
    
//     const quoteText = document.createElement('p');
//     quoteText.innerText = data.quoteText;

    
//     const quoteAuthor = document.createElement('p');
//     quoteAuthor.innerText = data.quoteAuthor;

    
//     inspQuotes.appendChild(quoteText);
//     inspQuotes.appendChild(quoteAuthor);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

var openModal = document.querySelector(".openModal");
var closeModal = document.querySelector("#closeModal")


openModal.addEventListener("click", function () {
  document.querySelector(".bgmodal").style.display = 'flex';
});

closeModal.addEventListener("click", function () {
  document.querySelector(".bgmodal").style.display = 'none';
});



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

