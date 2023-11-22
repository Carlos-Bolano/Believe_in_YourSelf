const buttonMenu = document.querySelector(".Hamburger")
const navbar = document.querySelector(".Header-list")

function toggleMenu() {
    navbar.classList.toggle("Header-active")
}

buttonMenu.addEventListener("click", toggleMenu)