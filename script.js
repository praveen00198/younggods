// ========== For navigation bar ==========
const menu = document.querySelector('.header-item');
function toggleMenu() {
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}
const list = document.querySelectorAll('.header-items');
list.forEach((item) => {
  item.addEventListener('click', () =>{
    menu.style.display = 'none';
  });
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



