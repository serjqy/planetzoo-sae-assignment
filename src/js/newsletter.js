export function newsletterInit() {
  const newsletterForm = document.querySelector(".newsletter__cta-form");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateFullName(fullname) {
    return /^[a-zA-Z ]+$/.test(fullname);
  }

  const newsletterFormName = document.querySelector(".newsletter__cta-name");
  const newsletterFormEmail = document.querySelector(".newsletter__cta-email");

  function showError(input, message) {
    let err = input.nextElementSibling;
    if (!err || !err.classList.contains("newsletter__cta-error")) {
      err = document.createElement("div");
      err.className = "newsletter__cta-error";
      input.after(err);
    }
    err.textContent = message;
  }

  function clearError(input) {
    const err = input.nextElementSibling;
    if (err && err.classList.contains("newsletter__cta-error")) {
      err.remove();
    }
  }

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    if (!validateFullName(newsletterFormName.value.trim())) {
      showError(newsletterFormName, "Please enter valid name e.g. John Smith");
      isValid = false;
    } else clearError(newsletterFormName);

    if (!validateEmail(newsletterFormEmail.value.trim())) {
      showError(
        newsletterFormEmail,
        "Please enter a valid email address e.g. email@test.com"
      );
      isValid = false;
    } else clearError(newsletterFormEmail);

    if (!isValid) return;

    alert("✅ You are successfully subscribed to newsletters");
    newsletterForm.reset();
  });
}
