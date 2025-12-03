export async function initTimeDate() {
  const dateContainer = document.querySelector(".order-summary-date");

  if (!dateContainer) return;

  const url = "https://timeapi.io/api/Time/current/zone?timeZone=UTC";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch time");

    const result = await response.json();

    const formattedDate = result.date;
    const formattedTime = result.time;

    const dateEl = document.createElement("p");
    dateEl.classList.add("order-summary-item");
    dateEl.textContent = `${formattedDate} ${formattedTime}`;

    dateContainer.appendChild(dateEl);
  } catch (error) {
    console.error("Time API error:", error);
  }
}
