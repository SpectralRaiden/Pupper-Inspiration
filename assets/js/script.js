var openModal = document.querySelector(".openModal");
var closeModal = document.querySelector("#closeModal")


openModal.addEventListener("click", function () {
  document.querySelector(".bgmodal").style.display = 'flex';
});

closeModal.addEventListener("click", function () {
  document.querySelector(".bgmodal").style.display = 'none';
});








