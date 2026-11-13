async function initApp() {
	const preloader = document.querySelector(".preloader");
	const page = document.body.dataset.page;

	try {
		document.body.style.overflow = "hidden";

		if (page === "main") {
			const { initGeneral } = await import("../init-general.js");
			const { initSlider } = await import("../slider.js");

			await initGeneral();
			await initSlider();
		}

		preloader.classList.add("preloader_hide");
		document.body.style.overflow = "";
	} catch (e) {
		console.error(e);
		console.log("error");
	}
}

initApp();
