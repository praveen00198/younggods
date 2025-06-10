document.addEventListener("DOMContentLoaded", function () {
  const events = [
    {
      title: "Garena Free Fire",
      description: "Fast-paced survival shooter for Indian gamers.",
      category: "Shooter",
      time: "2025-06-05T18:00:00",
      priceIndividual: 100,
      priceTeam: 400,
      prize:
        "Prizes is only for the first 10 participants. Prize money will vary on the basis of number of participants",
      image: "public/images/GarenaFF(3).jpg",
      slotsAvailable: 5,
    },
    {
      title: "Call of Duty: Mobile",
      description: "Fast-paced mobile action. Bring your best aim!",
      category: "FPS / Mobile",
      time: "2025-06-07T15:00:00",
      priceIndividual: 150,
      priceTeam: 0,
      prize:
        "Prizes is only for the first 10 participants. Prize money will vary on the basis of number of participants",
      image: "public/images/BGMI(1).jpg",
      slotsAvailable: 0,
    },
    {
      title: "BGMI Battle Royale",
      description: "Squad up and fight to be the last team standing!",
      category: "Battle Royale",
      time: "2025-06-10T20:00:00",
      priceIndividual: 120,
      priceTeam: 350,
      prize:
        "Prizes is only for the first 10 participants. Prize money will vary on the basis of number of participants",
      image: "public/images/BGMI(2).jpg",
      slotsAvailable: 5,
    },
  ];

  const cardContainer = document.getElementById("event-cards");
  const modal = document.getElementById("eventModal");
  const closeModal = document.getElementById("closeModal");
  const popupOverlay = document.getElementById("popupOverlay");
  const popupMessage = document.getElementById("popupMessage");

  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const priceIndividual = document.getElementById("priceIndividual");
  const priceTeam = document.getElementById("priceTeam");
  const modalPrize = document.getElementById("modalPrize");
  const joinEventBtn = document.getElementById("joinEventBtn");

  let selectedEvent = null;
  let countdownInterval; // GLOBAL for clearing old interval

  events.forEach((event) => {
    const card = document.createElement("div");
    card.classList.add("event-card");

    const info = document.createElement("div");
    info.classList.add("event-info");
    info.innerHTML = `
      <div class="event-date"></i>${new Date(
        event.time
      ).toLocaleString()}</div>
      <div class="event-title">${event.title}</div>
      <p class="event-description">${event.description}</p>
    `;

    const btn = document.createElement("button");
    btn.classList.add("view-details-btn");
    btn.textContent = "View Details";

    btn.addEventListener("click", () => {
      selectedEvent = event;

      modalImage.src = event.image;
      modalTitle.textContent = event.title;
      priceIndividual.textContent = event.priceIndividual;
      priceTeam.textContent = event.priceTeam;
      modalPrize.textContent = event.prize;

      const eventDate = new Date(event.time).getTime();
      startCountdown(eventDate);

      modal.classList.remove("hidden");
    });

    card.appendChild(info);
    card.appendChild(btn);
    cardContainer.appendChild(card);
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    clearInterval(countdownInterval); // Stop countdown when modal is closed
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      clearInterval(countdownInterval);
    }
    if (e.target === popupOverlay) popupOverlay.classList.add("hidden");
  });

  joinEventBtn.addEventListener("click", () => {
    if (!selectedEvent) return;

    const now = new Date();
    const eventTime = new Date(selectedEvent.time);

    if (now >= eventTime) {
      showPopup("Event already started!");
    } else if (selectedEvent.slotsAvailable <= 0) {
      showPopup("😥 Oops! Slots are full for this event!");
    } else {
      showPopup("🎉 You have successfully joined the event!");
      selectedEvent.slotsAvailable -= 1;
    }

    modal.classList.add("hidden");
    clearInterval(countdownInterval);
  });

  function showPopup(message) {
    popupMessage.textContent = message;
    popupOverlay.classList.remove("hidden");

    setTimeout(() => {
      popupOverlay.classList.add("hidden");
    }, 3000);
  }

  function startCountdown(targetDate) {
    const dayEl = document.getElementById("day");
    const hourEl = document.getElementById("hour");
    const minuteEl = document.getElementById("minute");
    const secondEl = document.getElementById("second");

    clearInterval(countdownInterval); // Clear old countdown

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        dayEl.textContent = "00";
        hourEl.textContent = "00";
        minuteEl.textContent = "00";
        secondEl.textContent = "00";
        clearInterval(countdownInterval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      dayEl.textContent = String(days).padStart(2, "0");
      hourEl.textContent = String(hours).padStart(2, "0");
      minuteEl.textContent = String(minutes).padStart(2, "0");
      secondEl.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown(); // Run once immediately
    countdownInterval = setInterval(updateCountdown, 1000);
  }
});
