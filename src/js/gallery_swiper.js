import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";
import "swiper/css";
import { animalsData } from "./DATA";

export function initGallerySwiper() {
  const swiperContainer = document.querySelector(".gallery-swiper");
  const galleryAnimals = document.querySelector(".gallery-list");

  if (!swiperContainer || !galleryAnimals) return;

  animalsData.forEach(({ id, image, name }) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide gallery-card";
    slide.innerHTML = `
      <a href="/src/layout/gallery_single.html?animal=${encodeURIComponent(
        id
      )}">
        <img src="${image}" alt="${name}" class="gallery-card__img" />
        <h2 class="gallery-card__text">${name}</h2>
      </a>
    `;
    galleryAnimals.appendChild(slide);
  });

  new Swiper(swiperContainer, {
    direction: "horizontal",
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    breakpoints: {
      320: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
      1440: { slidesPerView: 5 },
    },
    navigation: {
      nextEl: ".gallery-swiper__next",
      prevEl: ".gallery-swiper__prev",
    },
  });
}
