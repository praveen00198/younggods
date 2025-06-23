
// ========== For navigation bar ==========
const menu = document.querySelector(".header-item");
const menuBtn = document.getElementById("menu-btn");
const list = document.querySelectorAll(".header-items");
const body = document.querySelector("body");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

list.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.style.display = "none";
  });
});

body.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
});
menu.addEventListener("click", (e) => {
  e.stopPropagation();
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
