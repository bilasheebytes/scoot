const body = document.querySelector("body");
const main = document.querySelector("main");
const media = window.matchMedia("(width < 43.75em)");
const openButton = document.querySelector(".header__open");
const closeButton = document.querySelector(".header__close");
const headerMenu = document.querySelector(".header__menu");
const headerContent = document.querySelector(".header__content");

function openMobileMenu() {
  openButton.setAttribute("aria-expanded", "true");
  headerMenu.removeAttribute("inert");
  headerContent.removeAttribute("style");
  main.setAttribute("inert", "");
  bodyScrollLockUpgrade.disableBodyScroll(body);
  closeButton.focus();
}

function closeMobileMenu() {
  openButton.setAttribute("aria-expanded", "false");
  headerMenu.setAttribute("inert", "");
  main.removeAttribute("inert");
  bodyScrollLockUpgrade.enableBodyScroll(body);
  openButton.focus();

  setTimeout(() => {
    headerContent.style.transition = "none";
  }, 500);
}

function setupHeader(e) {
  if (e.matches) {
    // is mobile
    headerMenu.setAttribute("inert", "");
    headerContent.style.transition = "none";
  } else {
    // is tablet/desktop
    closeMobileMenu();
    headerMenu.removeAttribute("inert");
  }
}

setupHeader(media);

openButton.addEventListener("click", openMobileMenu);
closeButton.addEventListener("click", closeMobileMenu);

media.addEventListener("change", function (e) {
  setupHeader(e);
});
