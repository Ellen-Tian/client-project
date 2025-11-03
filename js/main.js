// === Update Footer Year ===
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// === Back to Top Button ===
const backToTop = document.createElement("button");
backToTop.id = "topBtn";
backToTop.textContent = "↑";
backToTop.title = "Back to top";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Header Shadow Effect ===
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (!header) return;
    if (window.scrollY > 20) {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "0 3px 8px rgba(0,0,0,0.25)";
    }
});

// === Hide Header on Scroll Down, Show on Scroll Up ===
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Only apply on larger screens
    if (window.innerWidth > 768 && header) {
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            // Scrolling down → hide header
            header.style.transform = "translateY(-100%)";
            header.style.transition = "transform 0.3s ease";
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up → show header
            header.style.transform = "translateY(0)";
        }
    }

    lastScrollY = currentScrollY;
});
