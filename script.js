// ========== For navigation bar ==========
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuToggle.classList.toggle("open");
});


// Faq Accordion
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const arrow = btn.querySelector(".arrow");

    answer.style.display = answer.style.display === "block" ? "none" : "block";
    arrow.classList.toggle("rotate");
  });
});



