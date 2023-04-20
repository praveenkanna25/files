let modalBtns = document.querySelectorAll(".show-modal");

let modalPop = document.querySelector(".modal");

let overlayBg = document.querySelector(".overlay");

let closeModal = document.querySelector(".close-modal");

let openModal = function () {
  modalPop.classList.remove("hidden");
  overlayBg.classList.remove("hidden");
};

modalBtns.forEach((data) => {
  data.addEventListener("click", openModal);
});
closeModal.addEventListener("click", function () {
  modalPop.classList.add("hidden");
  overlayBg.classList.add("hidden");
});

closeModal.addEventListener("click", close);
document.addEventListener("keydown", function (event) {
  console.log(event);

  if (event.key == "Backspace" || event.key == "Escape") {
    close();
  }
});
