
let navbar = document.querySelector("[data-navbar]");
let navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", () => navbar.classList.toggle("active"));

let header = document.querySelector("[data-header]");

window.addEventListener('scroll', e => {
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

let toggleBtns = document.querySelectorAll("[data-toggle-btn]");

toggleBtns = [...toggleBtns];

toggleBtns.forEach(toggleBtn => {
    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("active");
    });
});
