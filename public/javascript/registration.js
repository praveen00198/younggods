//  For navigation between steps
let currentStep = 0;

function showStep(step) {
  const steps = document.querySelectorAll(".form-step");
  steps.forEach((stepDiv, index) => {
    stepDiv.classList.remove("active");
    if (index === step) {
      stepDiv.classList.add("active");
    }
  });
}

function validateStep(stepIndex) {
  const currentStepDiv = document.querySelectorAll(".form-step")[stepIndex];
  const inputs = currentStepDiv.querySelectorAll("input, select, textarea");
  let valid = true;

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      input.classList.add("border-red-500");
      valid = false;
    } else {
      input.classList.remove("border-red-500");
    }
  });

  return valid;
}

function nextStep() {
  if (validateStep(currentStep)) {
    const steps = document.querySelectorAll(".form-step");
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showStep(currentStep);
});

// Password validation
const toastContainer = document.getElementById("toast-container");
function validatePasswords() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // Reset error message
  toastContainer.textContent = "";

  if (!password.value || !confirmPassword.value) {
    toastContainer.style.display = "block";
    toastContainer.textContent = "Both password fields are required.";
    return false;
  }

  if (password.value.length < 8) {
    toastContainer.style.display = "block";
    toastContainer.textContent = "Password must be at least 8 characters.";
    return false;
  }

  if (password.value !== confirmPassword.value) {
    toastContainer.style.display = "block";
    toastContainer.textContent = "Passwords do not match.";
    return false;
  }

  return true;
}

function submitForm(event) {
  if (!validatePasswords()) {
    event.preventDefault();
    return false;
  }
}

// OTP form validation
const otpInputs = document.querySelectorAll(".otp-input");
// Auto-focus next input
otpInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  // Allow arrow keys and backspace navigation
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value === "" && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});

function validateOTP(event) {
  event.preventDefault();

  let otp = "";
  let allFilled = true;

  otpInputs.forEach((input) => {
    if (!input.value.trim()) {
      allFilled = false;
    } else {
      otp += input.value.trim();
    }
  });

  // Show error if not filled
  if (!allFilled) {
    toastContainer.style.display = "block";
    toastContainer.textContent = "Please enter all 4 digits of the OTP.";
    return false;
  }

  toastContainer.style.display = "none";
  toastContainer.textContent = "";
}

let countdownTime = 30; // seconds
let timerInterval;

function startResendTimer() {
  const resendBtn = document.getElementById("resend-btn");
  const timerDisplay = document.getElementById("timer");

  resendBtn.disabled = true;
  timerDisplay.textContent = countdownTime;

  clearInterval(timerInterval); // Prevent multiple timers
  timerInterval = setInterval(() => {
    countdownTime--;
    timerDisplay.textContent = countdownTime;

    if (countdownTime <= 0) {
      clearInterval(timerInterval);
      resendBtn.disabled = false;
      timerDisplay.textContent = "0";
      countdownTime = 30; // Reset for next time
    }
  }, 1000);
}

// Call this after sending OTP initially or on successful resend
startResendTimer();

// Optional: Add click event to resend OTP when allowed
document.getElementById("resend-btn").addEventListener("click", () => {
  if (!document.getElementById("resend-btn").disabled) {
    // Simulate resend action
    console.log("OTP resent!");
    // Trigger resend API here if needed

    startResendTimer(); // Restart countdown
  }
});