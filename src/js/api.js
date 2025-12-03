export async function initTimeDate() {
  const dateContainer = document.querySelector(".order-summary-date");

  if (!dateContainer) return;

  const url = "http://worldtimeapi.org/api/ip";

  try {
    const response = await fetch(url);
    const result = await response.json();
    const formattedTime = result.datetime.slice(0, 10);
    const abbr = result.abbreviation;

    const dateEl = document.createElement("p");
    dateEl.classList.add("order-summary-item");
    dateEl.textContent = `${abbr} ${formattedTime}`;
    dateContainer.appendChild(dateEl);
  } catch (error) {
    console.error(error);
  }
}
