const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("btn-close");
const navigation = document.getElementById("navigation");
const social = document.getElementById("social-media");

const openMenu = () => {
    menu.classList.remove("menu-close");
    document.body.style.overflow = "hidden";
}

const closeMenu = () => {
    menu.classList.add("menu-close");
    document.body.style.overflow = "auto";
}

const close = (e) => {
    if (e.target === e.target.closest(".menu")) {
        closeMenu();
    }
    if (e.target.tagName === "A" || e.target.tagName === "IMG") {
        closeMenu();
    }
}

hamburger.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
navigation.addEventListener("click", close);
social.addEventListener("click", close);
menu.addEventListener("click", close);