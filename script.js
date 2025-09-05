const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop page refresh

  let isValid = true;

  // Clear old errors & success
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  successMsg.textContent = "";

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate Name
  if (name === "") {
    document.getElementById("nameError").textContent = "Full name is required.";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Validate Subject
  if (subject === "") {
    document.getElementById("subjectError").textContent = "Subject is required.";
    isValid = false;
  }

  // Validate Message
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    isValid = false;
  }

  // If valid
  if (isValid) {
    successMsg.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
