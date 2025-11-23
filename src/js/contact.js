export function initContact() {
  const form = document.getElementById("form");
  if (!form) return;

  const formName = document.getElementById("contact-name");
  const formPhone = document.getElementById("contact-phone");
  const formEmail = document.getElementById("contact-email");
  const formMessage = document.getElementById("contact-msg");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phoneNumber) {
    return /^\(?0( *\d\)?){9,10}$/.test(phoneNumber);
  }

  function validateFullName(fullname) {
    return /^[a-zA-Z ]+$/.test(fullname);
  }

  function showError(input, message) {
    let err = input.nextElementSibling;
    if (!err || !err.classList.contains("contact__input-error")) {
      err = document.createElement("div");
      err.className = "contact__input-error";
      input.after(err);
    }
    err.textContent = message;
  }

  function clearError(input) {
    const err = input.nextElementSibling;
    if (err && err.classList.contains("contact__input-error")) {
      err.remove();
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    if (!validateFullName(formName.value.trim())) {
      showError(formName, "Please enter valid name e.g. John Smith");
      isValid = false;
    } else clearError(formName);

    if (!validatePhone(formPhone.value.trim())) {
      showError(
        formPhone,
        "Please enter valid phone number e.g. 000 0000 00 00"
      );
      isValid = false;
    } else clearError(formPhone);

    if (!validateEmail(formEmail.value.trim())) {
      showError(
        formEmail,
        "Please enter a valid email address e.g. email@test.com"
      );
      isValid = false;
    } else clearError(formEmail);

    if (
      formMessage.value.trim().length === 0 ||
      formMessage.value.trim().length > 255
    ) {
      showError(formMessage, "Please enter your message (1–255 characters).");
      isValid = false;
    } else {
      clearError(formMessage);
    }

    if (!isValid) return;

    alert("✅ Your message has been sent!");
    form.reset();
  });
}
