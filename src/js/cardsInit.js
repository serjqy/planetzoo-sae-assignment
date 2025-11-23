import { animalsData } from "./DATA";

export function buildCards() {
  const donateGallery = document.querySelector(".donate-gallery__list");
  const galleryAnimals = document.querySelector(".gallery-animals__list");

  if (donateGallery) {
    animalsData.forEach(({ id, name, image, goal, raised, percentage }) => {
      const el = document.createElement("div");
      el.className = "donate-card";
      el.innerHTML = `
        <img src="${image}" alt="${name} image" class="donate-card__image" />
        <div class="donate-card__stats">
          <div class="donate-card__stat">
            <span class="donate-card__stat-label">Goal</span>
            <span class="donate-card__stat-value">${goal}</span>
          </div>
          <div class="donate-card__progress" aria-label="Donation progress">${percentage}</div>
          <div class="donate-card__stat">
            <span class="donate-card__stat-label">Raised</span>
            <span class="donate-card__stat-value">${raised}</span>
          </div>
        </div>
        <div class="donate-card__content">
          <h2 class="donate-card__title">Donate for ${name}</h2>
          <p class="donate-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit praesent neque ligula,
cursus a massa sed, consecle unit.</p>
          <a href="/src/layout/donation_single.html?animal=${encodeURIComponent(
            id
          )}" class="btn btn-tertiary btn-donate-single">Read More</a>
        </div>`;
      donateGallery.appendChild(el);
    });
  }
  if (galleryAnimals) {
    animalsData.forEach(({ id, image, name }) => {
      const el = document.createElement("div");
      el.className = "gallery-animals__card";
      el.innerHTML = `
        <a href="/src/layout/gallery_single.html?animal=${encodeURIComponent(
          id
        )}">
          <img src="${image}" alt="${name} Image" class="gallery-animals__img" />
          <h2 class="gallery-animals__text">${name}</h2>
        </a>`;

      galleryAnimals.append(el);
    });
  }
}
