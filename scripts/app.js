const nav = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add("nav_fixed");
  } else {
    nav.classList.remove("nav_fixed");
  }
});

const footerYear = document.querySelector(".footer_year");
footerYear.innerHTML = new Date().getFullYear();

const menu = document.querySelector(".menu_p");
const menuModal = document.querySelector(".menu_modal");
menu.addEventListener("click", () => {
  menuModal.classList.remove("close_menu");
  document.querySelector("html").style.overflow = "hidden";
});

const closeMenuBtn = document.querySelector(".menu_close_icon");
closeMenuBtn.addEventListener("click", () => {
  menuModal.classList.add("close_menu");
  document.querySelector("html").style.overflow = "unset";
});

const msgMeBtn = document.querySelector(".msg_me_btn");
const contactModal = document.querySelector(".contact_modal");
const contactModalCloseBtn = document.querySelector(".contact_modal_close");

msgMeBtn.addEventListener("click", () => {
  contactModal.classList.remove("contact_modal_remove");
  document.querySelector("html").style.overflow = "hidden";
});

contactModalCloseBtn.addEventListener("click", () => {
  contactModal.classList.add("contact_modal_remove");
  document.querySelector("html").style.overflow = "unset";
});

const eachMenuLink = document.querySelectorAll(".menu .menu_lists a");

eachMenuLink.forEach((elem) =>
  elem.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = nav.getBoundingClientRect().height;

    let position = element.offsetTop - navHeight;
    window.scrollTo({
      left: 0,
      top: position,
    });
    menuModal.classList.add("close_menu");
    document.querySelector("html").style.overflow = "unset";
  })
);
