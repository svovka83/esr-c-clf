import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export async function initSlider() {
	const swiper1 = new Swiper(".swiper_1", {
		modules: [Navigation],

		slidesPerView: 1,
		spaceBetween: 30,
		speed: 700,
		loop: true,

		navigation: {
			prevEl: ".swiper-button-prev_1",
			nextEl: ".swiper-button-next_1",
		},
	});

	const swiper2 = new Swiper(".swiper_2", {
		modules: [Navigation],

		slidesPerView: 1,
		spaceBetween: 30,
		speed: 700,
		loop: true,

		navigation: {
			prevEl: ".swiper-button-prev_2",
			nextEl: ".swiper-button-next_2",
		},
	});
}

export async function initSliderButtons() {
	const prevBtn1 = document.querySelector(".slider__button_prev1");
	const nextBtn1 = document.querySelector(".slider__button_next1");

	const prevBtn2 = document.querySelector(".slider__button_prev2");
	const nextBtn2 = document.querySelector(".slider__button_next2");

	prevBtn1.addEventListener("click", () => {
		document.querySelector(".swiper-button-prev_1").click();
	});

	nextBtn1.addEventListener("click", () => {
		document.querySelector(".swiper-button-next_1").click();
	});

	prevBtn2.addEventListener("click", () => {
		document.querySelector(".swiper-button-prev_2").click();
	});

	nextBtn2.addEventListener("click", () => {
		document.querySelector(".swiper-button-next_2").click();
	});
}
