const hamburgerMenuHome = document.getElementById("hamburger-menu");
const navbarLinksHome = document.getElementById("navbar-links");

hamburgerMenuHome.addEventListener("click", () => {
    navbarLinksHome.classList.toggle("open");
});
