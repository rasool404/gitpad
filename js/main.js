let iconMenu = document.querySelector(".icon-menu"),
  body = document.querySelector("body"),
  menuBody = document.querySelector(".menu__body");
iconMenu &&
  iconMenu.addEventListener("click", function () {
    iconMenu.classList.toggle("active"),
      body.classList.toggle("lock"),
      menuBody.classList.toggle("active");
  }),
  window.addEventListener("scroll", function () {
    document
      .getElementById("header")
      .classList.toggle("fixed", window.scrollY > 5);
  });
const cookieButton = document.querySelector(".cookie__btn"),
  cookieBlock = document.querySelector(".cookie");
cookieButton.addEventListener("click", () => {
  cookieBlock.classList.add("hide");
});
