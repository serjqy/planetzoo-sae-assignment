export async function initTimeDate() {
  const dateContainer = document.querySelector(".order-summary-date");

  if (!dateContainer) return;

  const url = "https://world-clock.p.rapidapi.com/json/est/now";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d428896cc0mshe8aa7f00da50d48p17223fjsn90776b9ef7db",
      "x-rapidapi-host": "world-clock.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const formattedTime = result.currentDateTime.slice(0, 10);

    const dateEl = document.createElement("p");
    dateEl.classList.add("order-summary-item");
    dateEl.textContent = `${result.dayOfTheWeek} ${formattedTime}`;
    dateContainer.appendChild(dateEl);
  } catch (error) {
    console.error(error);
  }
}
