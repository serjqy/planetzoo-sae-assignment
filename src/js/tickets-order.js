import { tickets } from "./DATA";

export function initTicketOrder() {
  const ticketList = document.getElementById("ticketList");
  const totalDisplay = document.getElementById("total");
  const itemCountDisplay = document.getElementById("itemCount");
  const basketBtn = document.getElementById("addToBasket");

  if (!ticketList) return;

  let currentTotal = 0;
  let currentItemCount = 0;

  const updateSummary = () => {
    let total = 0;
    let itemCount = 0;
    document.querySelectorAll(".order-card").forEach((c, i) => {
      const qty = parseInt(c.querySelector(".order-input").value) || 0;
      total += qty * tickets[i].price;
      itemCount += qty;
    });

    currentTotal = total;
    currentItemCount = itemCount;

    totalDisplay.textContent = total.toFixed(2);
    itemCountDisplay.textContent = `${itemCount} item${
      itemCount !== 1 ? "s" : ""
    } selected`;
  };

  tickets.forEach(({ name, price, note }) => {
    const card = document.createElement("div");
    card.className = "order-card";
    card.innerHTML = `
      <div class="order-left">
        <h3 class="order-card-title">${name}</h3>
        <p class="order-card-note">${
          note || "Valid for 30 days from purchase date"
        }</p>
        <p class="order-card-price"><strong>${
          price === 0 ? "Free" : "£" + price.toFixed(2)
        }</strong></p>
      </div>
      <div class="order-right">
        <button class="btn btn-primary">-</button>
        <input type="number" value="0" min="0" class="order-input"/>
        <button class="btn btn-tertiary">+</button>
      </div>
    `;
    ticketList.appendChild(card);

    const minus = card.querySelector(".btn-primary");
    const plus = card.querySelector(".btn-tertiary");
    const input = card.querySelector(".order-input");

    minus.addEventListener("click", () => {
      input.value = Math.max(0, parseInt(input.value || 0) - 1);
      updateSummary();
    });

    plus.addEventListener("click", () => {
      input.value = parseInt(input.value || 0) + 1;
      updateSummary();
    });

    input.addEventListener("input", updateSummary);
  });

  basketBtn.addEventListener("click", () => {
    if (currentItemCount === 0) {
      alert("❗Please add items before proceeding to basket.");
      return;
    }

    alert("✅ Tickets added to basket!");
    document.querySelectorAll(".order-input").forEach((input) => {
      input.value = 0;
    });

    updateSummary();
  });
}
