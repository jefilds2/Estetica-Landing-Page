const form = document.querySelector('.formulario');
const mascaraform = document.querySelector('.mascaraform');

function mostrarform() {
    mascaraform.style.visibility = 'visible';
    form.style.zIndex = '2';
    form.style.left = '50%'
    form.style.transform = 'translatex(-50%)'
}

function esconderform() {
    mascaraform.style.visibility = 'hidden';
    form.style.zIndex = '0';
    form.style.left = '-300px'
    form.style.transform = 'translatex(0)'
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && getComputedStyle(mascaraform).visibility === "visible") {
        esconderform();
    }
});

window.addEventListener("load", () => {
    document.getElementById("orcamentoForm").reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#menu");

    toggle.addEventListener("click", () => {
        const open = menu.classList.toggle("menu-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.querySelector(".menu-ico").textContent = open ? "✕" : "☰";
    });

    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
        menu.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector(".menu-ico").textContent = "☰";
    }));
});




