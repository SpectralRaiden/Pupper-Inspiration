const api_url = "https://zenquotes.io/api/random/";
const div = document.querySelector('.quote-list');

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data[0].q);

  div.innerHTML += `<div>${data[0].q}</div>`;
}

getapi(api_url);

var requestUrl = 
'https://dog.ceo/api/breeds/image/random';

var clickButton = document.getElementById('clickButton');
var image = document.getElementById("image");

clickButton.addEventListener("click", function () {
  fetch(requestUrl)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
    display_image(data.message)
    image.classList.add('randomDog');
  })
});

function display_image(img) {
 document.getElementById("image").src = img;
}

var openModal = document.querySelector(".openModal");
var closeModal = document.querySelector("#closeModal");

openModal.addEventListener("click", function () {
  document.querySelector(".bgmodal").style.display = 'flex';
});

closeModal.addEventListener("click", function () {
  document.querySelector(".bgmodal").style.display = 'none';
});


var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');

document.querySelector('.bgmodal').addEventListener('submit', function (event) {
  event.preventDefault();
  if (nameInput.value) {
    console.log(nameInput.value);
  }
  if (emailInput.value) {
    console.log(emailInput.value);
  }
  if (messageInput.value) {
    console.log(messageInput.value);
  }
  document.getElementById('form').reset();
});
