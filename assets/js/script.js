const api_url = "https://zenquotes.io/api/random/";
const div = document.querySelector('.quote-list');
var openModal = document.querySelector(".openModal");
var closeModal = document.querySelector("#closeModal");
var modal = document.querySelector("#form");
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data[0].q);

  div.innerHTML = `<div>${data[0].q}</div>`;
}

var clickButton = document.getElementById('clickButton');
var image = document.getElementById("image");

var requestUrl = 'https://dog.ceo/api/breeds/image/random';

clickButton.addEventListener("click", function () {
  fetch(requestUrl)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
    display_image(data.message)
    image.classList.add('randomDog');
    getapi(api_url);
  })
});

function display_image(img) {
 document.getElementById("image").src = img;
}

openModal.addEventListener("click", function () {
  document.querySelector(".bgmodal").style.display = 'flex';
});

closeModal.addEventListener("click", function () {
  document.querySelector(".bgmodal").style.display = 'none';
});

window.onclick = function(event) {
  if (event.target === modal) {
    document.querySelector(".bgmodal").style.display = "none";
  }
}

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
