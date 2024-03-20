// Code for navbar
const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");
	// Toggle Nav
	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
		// Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 10 + 0.1
				}s`;
			}
		});

		// Burger Animation
		burger.classList.toggle("toggle");
	});
};

navSlide();

// Code for Image Carousel

const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const offset = button.dataset.carouselButton === "next" ? 1 : -1;
		const slides = button
			.closest("[data-carousel]")
			.querySelector("[data-slides]");

		const activeSlide = slides.querySelector("[data-active]");
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;
		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.style.transition = "opacity 0.6s ease-in-out"; // Add CSS transition
					entry.target.style.opacity = 1; // Fade in the image
				} else {
					entry.target.style.opacity = 0; // Fade out the image when out of view
				}
			});
		},
		{ threshold: 0.5 }
	);

	const images = document.querySelectorAll(".photo-smooth");
	images.forEach((img) => {
		observer.observe(img);
	});
});
