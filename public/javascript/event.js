// ==================== Event data ======================
const data = [
  {
    image:
      "https://images.unsplash.com/photo-1586399254662-c8948cd73421?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDAxMTQyOHx8ZW58MHx8fHx8",
    eventStatus: "Upcoming",
    date: "2025-06-08T18:00:00",
    eventTitle: "Rise of Gods",
    game: "Garena Free Fire",
    format: "solo",
    slots: 48,
    entryFees: 100,
    winningAmount: 400,
  },
  {
    image:
      "https://images.unsplash.com/13/unsplash_5243a2eb2bc02_1.JPG?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MTAwMTE0Mjh8fGVufDB8fHx8fA%3D%3D",
    eventStatus: "Upcoming",
    date: "2025-06-08T18:00:00",
    eventTitle: "Rise of Gods",
    game: "Garena Free Fire",
    format: "solo",
    slots: 48,
    entryFees: 100,
    winningAmount: 400,
  },
  {
    image:
      "https://images.unsplash.com/photo-1572998829395-2d1e7b3b707d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMDAxMTQyOHx8ZW58MHx8fHx8",
    eventStatus: "Completed",
    date: "2025-06-08T18:00:00",
    eventTitle: "RCB Scrims",
    game: "Garena Free Fire",
    format: "solo",
    slots: 48,
    entryFees: 100,
    winningAmount: 400,
  },
  {
    image:
      "https://images.unsplash.com/photo-1545450659-8f9ecd13559d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTAwMTE0Mjh8fGVufDB8fHx8fA%3D%3D",
    eventStatus: "Upcoming",
    date: "2025-06-08T18:00:00",
    eventTitle: "Rush to the Top",
    game: "Garena Free Fire",
    format: "solo",
    slots: 48,
    entryFees: 100,
    winningAmount: 400,
  },
  {
    image:
      "https://images.unsplash.com/photo-1637345540120-38bb0bbb7871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MTAwMTE0Mjh8fGVufDB8fHx8fA%3D%3D",
    eventStatus: "Upcoming",
    date: "2025-06-08T18:00:00",
    eventTitle: "Rise of Gods",
    game: "Garena Free Fire",
    format: "solo",
    slots: 48,
    entryFees: 100,
    winningAmount: 400,
  },
];

// ==================== Event logic below ======================

const btnUpcoming = document.getElementById("btn-upcoming");
const btnCompleted = document.getElementById("btn-completed");
const btnAll = document.getElementById("btn-all");

const allSection = document.querySelector(".all-events");
const upcomingSection = document.querySelector(".upcoming-events");
const completedSection = document.querySelector(".completed-events");

const searchInput = document.querySelector(".search-input");

// ==================== Event card ===========================
let eventImage = document.querySelector(".event-image");
let eventstatus = document.querySelector(".event-status");
let eventName = document.querySelector(".event-name");
let eventCardDate = document.getElementById("event-card-date");
let totalSlots = document.querySelector(".noOfSlot");
let entryFees = document.querySelector(".entry-fees");
let winningAmount = document.querySelector(".winning-amount");

function setActiveButton(activeBtn) {
  [btnAll, btnUpcoming, btnCompleted].forEach((btn) =>
    btn.classList.remove("active")
  );
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

data.forEach((item) => {
  allSection.innerHTML += `
    <div class="event-game-card w-65 bg-[#ffffff0d] rounded-lg overflow-hidden relative">
            <img class="event-image" src="${item.image}" alt="Image">
            <p class="event-status text-xs text-zinc-700 font-semibold absolute top-38 right-0 px-1 py-0.5 rounded bg-yellow-300">${item.eventStatus}</p>

            <div id="event-card-detail" class="px-3 py-3">
              <h3 class="event-name text-3xl font-bold text-zinc-100">${item.eventTitle}</h3>
              <p class="event-card-date text-sm/7 text-zinc-200 font-semibold">${item.date}</p>

              <!-- <div class="flex-container flex justify-between rounded-md mt-1">
                <p class="game-name text-sm font-bold text-zinc-300">Garena Free Fire</p>
                <p class="format text-sm font-bold text-zinc-300">Solo</p>
              </div> -->

              <div class="felx-container flex justify-between gap-2 mt-2">
                <div class="slot-detail w-22 text-center rounded bg-zinc-200 px-2 py-1">
                  <h4 class="noOfSlot text-3xl font-bold">${item.slots}</h4>
                  <p class="text-xs leading-none">Slots Available</p>
                </div>

                <div class="entry-fee-detail w-22 text-center rounded bg-zinc-200 px-2 py-1">
                  <h4 class="entry-fees text-3xl font-bold">${item.entryFees}<span class="text-sm font-semibold">₹</span></h4>  
                  <p class="text-xs leading-none">Registration Fees</p>
                </div>

                <div class="prize-details w-22 text-center rounded bg-zinc-200 px-2 py-1">
                  <h4 class="winning-amount text-3xl font-bold">${item.winningAmount}<span class="text-sm font-semibold">₹</span></h4>
                  <p class="text-xs leading-none">Winning Amount</p>
                </div>
              </div>

              <button class="btn w-full text-center mt-4 bg-blue-300 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-zinc-100 cursor-pointer">Book a slot</button>
            </div>
          </div>`;
});


