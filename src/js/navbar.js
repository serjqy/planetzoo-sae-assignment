export function initNavbar() {
  const headerWrapper = document.querySelector(".header__wrapper");
  const navContainer = document.querySelector(".nav");
  const navWrapper = document.querySelector(".nav__wrapper");
  const navLinks = document.querySelectorAll(".nav__link");

  const btnMenu = document.querySelector(".btn-menu");

  btnMenu.addEventListener("click", () => {
    headerWrapper.classList.toggle("active");
    navContainer.classList.toggle("active");
    navWrapper.classList.toggle("active");

    updateMenuBtn();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navContainer.classList.remove("active");
      headerWrapper.classList.remove("active");
      navWrapper.classList.remove("active");

      updateMenuBtn();
    });
  });

  function updateMenuBtn() {
    if (navContainer.classList.contains("active")) {
      btnMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  }
}
