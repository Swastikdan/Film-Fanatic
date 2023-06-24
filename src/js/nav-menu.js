const menuButton = document.querySelector("#menu-button");
const closeButton = document.querySelector("#close-button");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuButton.classList.toggle("hidden");
  closeButton.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuButton.classList.toggle("hidden");
  closeButton.classList.toggle("hidden");
});
