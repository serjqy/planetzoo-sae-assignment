import "../css/style.scss";

import { initContact } from "./contact";
import { buildCards } from "./cardsInit";
import { initNavbar } from "./navbar";
import { animalSingle } from "./animal";
import { payInit } from "./pay";
import { newsletterInit } from "./newsletter";
import { faqInit } from "./faq";
import { initGallerySwiper } from "./gallery_swiper";
import { initDonateSwiper } from "./donation_swiper";
import { initTicketOrder } from "./tickets-order";
import { initTimeDate } from "./api";

initGallerySwiper();
initDonateSwiper();

initNavbar();
initContact();

buildCards();

animalSingle();
payInit();

newsletterInit();

faqInit();

initTicketOrder();

initTimeDate();
