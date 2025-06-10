// ========== Toast Notification ==========
const toastContainer = document.getElementById("toast-container");

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// ========== Input Elements ==========
const form = document.querySelector(".form-container");
const nameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const contactInput = document.getElementById("contact");
const fileInput = document.getElementById("screenshot");
const previewImage = document.getElementById("preview-image");
const uploadBtn = document.getElementById("upload-btn");
const imageDropContainer = document.getElementById("profile-image-container");

// ========== Full Name Validation ==========
nameInput.addEventListener("input", function () {
  const namePattern = /^[A-Za-z\s]{3,}$/;
  this.setCustomValidity(
    !namePattern.test(this.value)
      ? "Enter a valid full name (min 3 characters, letters only)"
      : ""
  );
  this.reportValidity();
});

// ========== Email Validation ==========
emailInput.addEventListener("input", function () {
  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  this.setCustomValidity(
    !emailPattern.test(this.value)
      ? "Enter a valid email address"
      : ""
  );
  this.reportValidity();
});

// ========== Phone Number Auto-format ==========
contactInput.addEventListener("input", function () {
  let value = this.value.replace(/[^\d]/g, "");

  if (value.startsWith("91")) {
    value = value.slice(2);
  }

  value = value.slice(0, 10); // Limit to 10 digits

  let formattedMain = value.replace(/^(\d{0,5})(\d{0,5})$/, (match, p1, p2) => {
    return [p1, p2].filter(Boolean).join(" ");
  });

  this.value = `+91 ${formattedMain}`;
});


// ========== Form Submit Validation ==========
form.addEventListener("submit", function (e) {
  const errors = [];

  const namePattern = /^[A-Za-z\s]{3,}$/;
  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  const contactPattern = /^\+91 \d{5} \d{5}$/;

  if (!namePattern.test(nameInput.value.trim())) {
    errors.push("Please enter a valid full name.");
  }

  if (!emailPattern.test(emailInput.value.trim())) {
    errors.push("Please enter a valid email address.");
  }

  if (!contactPattern.test(contactInput.value.trim())) {
    errors.push("Phone number must be in +91 95682 48964 format.");
  }

  if (!fileInput.files.length) {
    errors.push("Please upload a profile image.");
  }

  if (errors.length > 0) {
    e.preventDefault();
    toastContainer.innerHTML = ""; 
    errors.forEach(showToast);
  }
});
