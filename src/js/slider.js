import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export async function initSlider() {
	const swiper = new Swiper(".swiper", {
		modules: [Navigation],
		// direction: "vertical",
		// loop: true,
		// pagination: {
		// 	el: ".swiper-pagination",
		// },
		navigation: {
			prevEl: ".swiper-button-prev",
			nextEl: ".swiper-button-next",
		},
		// scrollbar: {
		// 	el: ".swiper-scrollbar",
		// },
	});
}
