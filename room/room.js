import "../src/index.css";
// import Swiper JS
import Swiper, { Navigation } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  slidesPerView: 1,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const toggleOpen = document.querySelector(".toggle-open");
const sidebar = toggleOpen.parentNode;
toggleOpen.addEventListener("click", function () {
  toggleOpen.classList.toggle("sidebar-open");
  sidebar.classList.toggle("left-full");
  sidebar.classList.toggle("right-0");
});
