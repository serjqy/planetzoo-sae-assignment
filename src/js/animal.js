import { animalsData } from "./DATA.js";

export function animalSingle() {
  const container = document.querySelector(".animal-single");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const animalId = params.get("animal");
  const animal = animalsData.find((a) => a.id === animalId);

  if (!animal) {
    window.location.replace("/src/layout/404.html");
    return;
  }

  const {
    name,
    mass,
    speed,
    lifespan,
    diet,
    scientificName,
    type,
    gestationPeriod,
  } = animal;

  const imageEl = container.querySelector(".animal-single__image");
  const titleEl = container.querySelector(".animal-single__title");
  const descEl = container.querySelector(".animal-single__desc");

  if (imageEl) {
    imageEl.src = animal.image;
    imageEl.alt = animal.name;
  }
  if (titleEl) titleEl.textContent = animal.name;
  if (descEl)
    descEl.innerHTML = (animal.description || "").replace(/\n/g, "<br>");

  const statsWrapper = document.querySelector(".stats__wrapper");

  if (statsWrapper) {
    const statsGrid = document.querySelector(".stats__grid");

    statsGrid.innerHTML = `
      <div class="stats__item">
        <span class="stats__item__label">Mass</span>
        <span class="stats__item__value stats__item__mass">${mass}</span>
      </div>
      <div class="stats__item">
        <span class="stats__item__label">Speed</span>
        <span class="stats__item__value stats__item__speed">${speed}</span>
      </div>
      <div class="stats__item">
        <span class="stats__item__label">Lifespan</span>
        <span class="stats__item__value stats__item__lifespan">${lifespan}</span>
      </div>
      <div class="stats__item">
        <span class="stats__item__label">Diet</span>
        <span class="stats__item__value stats__item__diet">${diet}</span>
      </div>
      <div class="stats__item">
        <span class="stats__item__label">Common Name</span>
        <span class="stats__item__value stats__item__name">${name}</span>
      </div>
      <div class="stats__item">
        <span class="stats__item__label">Scientific Name</span>
        <span class="stats__item__value stats__item__scientificName">${scientificName}</span>
      </div>
      <div class="stats__item">
        <span class="stats__item__label">Type</span>
        <span class="stats__item__value stats__item__type">${type}</span>
      </div>
      <div class="stats__item">
        <span class="stats__item__label">Gestation Period</span>
        <span class="stats__item__value stats__item__gestationPeriod">${gestationPeriod}</span>
      </div>
    `;

    statsWrapper.appendChild(statsGrid);
  }
}
