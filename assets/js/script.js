
const api_url ="https://zenquotes.io/api/random/";
const div = document.querySelector('.quote-list');

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data[0].q);

  div.innerHTML += `<div>${data[0].q}</div>`;
}

getapi(api_url);

// var requestUrl = 
// 'https://dog.ceo/api/breeds/image/random';

// var clickButton = document.getElementById('clickButton');
// var image = document.getElementById("image");

// clickButton.addEventListener("click", function () {
//   fetch(requestUrl)
//   .then(function (response) {
//       return response.json();
//   })
//   .then(function (data) {
//     console.log(data)
//     display_image(data.message)
//     image.classList.add('randomDog');
//   })
// });

// function display_image(img) {
//  document.getElementById("image").src = img;

var openModal = document.querySelector(".openModal");
var closeModal = document.querySelector("#closeModal");

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

 
/* var request = require('request'); // "Request" library
=========

var request = require => ('request'); // "Request" library

>>>>>>>>> Temporary merge branch 2

var client_id = 'CLIENT_ID'; // Your client id
var client_secret = 'CLIENT_SECRET'; // Your secret


// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {

 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) (authOptions)
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};
Console.log 

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
}); */


window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById('embed-iframe');
  let options = {
      uri: 'https://open.spotify.com/playlist/2LNYYUNZGpLRlKjlAsy3Yo'
    };
  let callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};