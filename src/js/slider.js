import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export async function initSlider() {
	const swiper = new Swiper(".swiper", {
		modules: [Navigation],

		slidesPerView: 1,
		spaceBetween: 30,
		speed: 700,
		loop: true,

		navigation: {
			prevEl: ".swiper-button-prev",
			nextEl: ".swiper-button-next",
		},
	});
}

export async function initSliderButtons() {
	const prevBtn = document.querySelector(".slider__button_prev");
	const nextBtn = document.querySelector(".slider__button_next");

	prevBtn.addEventListener("click", () => {
		document.querySelector(".swiper-button-prev").click();
	});

	nextBtn.addEventListener("click", () => {
		document.querySelector(".swiper-button-next").click();
	});
}
