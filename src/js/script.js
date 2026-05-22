// BUTTON MOBILE NAS SEÇÕES HEADERS
const btnMobile = document.querySelector("#btn-menu");
const navLinks = document.getElementById("nav-list-header");
const iconBtn = document.querySelector("#btn-menu i")

btnMobile.addEventListener("click", () => {
    console.log("Clicou")
    navLinks.classList.toggle("show");
    iconBtn.classList.toggle('fa-times')
    iconBtn.classList.toggle('fa-bars')
});


const btnFilter = document.querySelector("#btn-filter");
const navFilter = document.querySelector(".nav-filter");
const navFilterMobile = document.querySelector(".nav-filter-mobile");

btnFilter.addEventListener("click", () => {
    console.log("Clicou")
    navFilter.classList.toggle("show");
    navFilterMobile.classList.toggle("show");
});