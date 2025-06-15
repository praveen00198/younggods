const btnUpcoming = document.getElementById("btn-upcoming");
const btnCompleted = document.getElementById("btn-completed");
const btnAll = document.getElementById("btn-all");

const allSection = document.querySelector(".all-events");
const upcomingSection = document.querySelector(".upcoming-events");
const completedSection = document.querySelector(".completed-events");

function setActiveButton(activeBtn) {
  [btnAll, btnUpcoming, btnCompleted].forEach((btn) => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}

btnAll.addEventListener("click", () => {
  allSection.hidden = false;
  upcomingSection.hidden = true;
  completedSection.hidden = true;
  setActiveButton(btnAll);
});

btnUpcoming.addEventListener("click", () => {
  allSection.hidden = true;
  upcomingSection.hidden = false;
  completedSection.hidden = true;
  setActiveButton(btnUpcoming);
});

btnCompleted.addEventListener("click", () => {
  allSection.hidden = true;
  upcomingSection.hidden = true;
  completedSection.hidden = false;
  setActiveButton(btnCompleted);
});

setActiveButton(btnAll);
