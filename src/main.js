import "./index.css";
// import Swiper JS
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const toggleOpen = document.querySelector(".toggle-open");
const swiperToggle = document.querySelector(".swiper-toggle");
toggleOpen.addEventListener("click", function () {
  swiperToggle.classList.toggle("h-0");
  swiperToggle.classList.toggle("!p-0");
});
