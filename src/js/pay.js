export function payInit() {
  const payForm = document.querySelector(".pay__form");
  if (!payForm) return;
  const payAmounts = document.querySelectorAll(
    ".pay__group-amount .pay__label"
  );
  const payTypes = document.querySelectorAll(".pay__group-type .pay__label");

  payAmounts.forEach((el) => {
    el.addEventListener("click", () => {
      payAmounts.forEach((i) => i.classList.remove("pay-active"));
      el.classList.add("pay-active");
    });
  });

  payTypes.forEach((el) => {
    el.addEventListener("click", () => {
      payTypes.forEach((i) => i.classList.remove("pay-active"));
      el.classList.add("pay-active");
    });
  });

  payForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const amount = payForm.querySelector('input[name="amount"]:checked').value;
    const method = payForm.querySelector('input[name="method"]:checked').value;
    const name = payForm.querySelector('input[name="fullName"]').value.trim();
    const phone = payForm.querySelector('input[name="phone"]').value.trim();
    const email = payForm.querySelector('input[name="email"]').value.trim();

    if (!amount) return alert("Please select a donation amount!");
    if (!method) return alert("Please select a payment method!");
    if (!name) return alert("Enter your full name!");
    if (!phone) return alert("Enter your phone number!");
    if (!email) return alert("Enter your email!");

    alert(
      `Thank you, your ${amount} donation via ${method} has been recorded.`
    );

    payForm.reset();
  });
}
