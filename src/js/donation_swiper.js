import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";
import "swiper/css";
import { animalsData } from "./DATA";

export function initDonateSwiper() {
  const swiperContainer = document.querySelector(".donate-swiper");
  const donateGallery = document.querySelector(".donate-list");

  if (!swiperContainer || !donateGallery) return;

  animalsData.forEach(({ id, name, image, goal, raised, percentage }) => {
    const el = document.createElement("div");
    el.className = "swiper-slide donate-card";
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

  new Swiper(swiperContainer, {
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}
