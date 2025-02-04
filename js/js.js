document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuOpenButton = document.querySelector(".menu-mobile-button");
  const menuCloseButton = document.querySelector(".mobile-menu-close");

  menuOpenButton.addEventListener("click", function () {
    mobileMenu.classList.add("menu-open");
  });

  menuCloseButton.addEventListener("click", function () {
    mobileMenu.classList.remove("menu-open");
  });

  document.addEventListener("click", function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !menuOpenButton.contains(event.target)
    ) {
      mobileMenu.classList.remove("menu-open");
    }
  });
});
