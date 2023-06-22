const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont"),
  smallMenu = document.querySelector(".header__sm-menu"),
  headerHamMenuBtn = document.querySelector(".header__main-ham-menu"),
  headerHamMenuCloseBtn = document.querySelector(
    ".header__main-ham-menu-close"
  ),
  headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  smallMenu.classList.contains("header__sm-menu--active")
    ? smallMenu.classList.remove("header__sm-menu--active")
    : smallMenu.classList.add("header__sm-menu--active"),
    headerHamMenuBtn.classList.contains("d-none")
      ? (headerHamMenuBtn.classList.remove("d-none"),
        headerHamMenuCloseBtn.classList.add("d-none"))
      : (headerHamMenuBtn.classList.add("d-none"),
        headerHamMenuCloseBtn.classList.remove("d-none"));
});

for (let e = 0; e < headerSmallMenuLinks.length; e++)
  headerSmallMenuLinks[e].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active"),
      headerHamMenuBtn.classList.remove("d-none"),
      headerHamMenuCloseBtn.classList.add("d-none");
  });
const headerLogoConatiner = document.querySelector(".header__logo-container");
headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});
