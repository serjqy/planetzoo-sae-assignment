export function payInit() {
  const payForm = document.querySelector(".pay__form");
  const payError = document.querySelector(".input-error");
  const payError2 = document.querySelector(".input-error2");
  const payError3 = document.querySelector(".input-error3");

  if (!payForm) return;

  const payAmounts = document.querySelectorAll(
    ".pay__group-amount .pay__label"
  );
  const payTypes = document.querySelectorAll(".pay__group-type .pay__label");

  function addToggleClass(list) {
    list.forEach((el) => {
      el.addEventListener("click", () => {
        list.forEach((i) => i.classList.remove("pay-active"));
        el.classList.add("pay-active");
      });
    });
  }

  addToggleClass(payAmounts);
  addToggleClass(payTypes);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\(?0( *\d\)?){9,10}$/.test(phone);
  const validateFullName = (name) => /^[a-zA-Z ]+$/.test(name);

  payForm.addEventListener("submit", (e) => {
    e.preventDefault();

    payError.innerHTML = "";
    payError3.innerHTML = "";
    payError2.innerHTML = "";
    payError.style.color = "red";
    payError2.style.color = "red";
    payError3.style.color = "red";

    const amountEl = payForm.querySelector('input[name="amount"]:checked');
    const methodEl = payForm.querySelector('input[name="method"]:checked');
    const fullName = payForm
      .querySelector('input[name="fullName"]')
      .value.trim();
    const phone = payForm.querySelector('input[name="phone"]').value.trim();
    const email = payForm.querySelector('input[name="email"]').value.trim();

    let valid = true;

    if (!methodEl) {
      payError2.innerHTML = "<p>Please select a donation amount.</p>";
      valid = false;
    }

    if (!amountEl) {
      payError3.innerHTML = "<p>Please select a payment method.</p>";
      valid = false;
    }

    if (!validateFullName(fullName)) {
      payError.innerHTML +=
        "<p>Please enter a valid full name (letters only).</p>";
      valid = false;
    }

    if (!validatePhone(phone)) {
      payError.innerHTML += "<p>Please enter a valid phone number.</p>";
      valid = false;
    }

    if (!validateEmail(email)) {
      payError.innerHTML += "<p>Please type email in format your@email.com</p>";
      valid = false;
    }

    if (!valid) return;

    setTimeout(() => {
      payError.style.color = "green";
      payError.innerHTML = "<p>Your donation was successful.</p>";

      setTimeout(() => {
        payError.innerHTML = "";
      }, 2000);
    }, 0);

    payTypes.forEach((i) => i.classList.remove("pay-active"));
    payAmounts.forEach((i) => i.classList.remove("pay-active"));

    payForm.reset();
  });
}
