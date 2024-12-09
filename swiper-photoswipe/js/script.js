
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';
import PhotoSwipe from './photoswipe.esm.min.js';

	// Initialize Swiper
	const swiper = new Swiper('.swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
	});
	
	// Initialize Swiper 2 without Photoswipe
	const swiper2 = new Swiper('.swiper-2', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		loop: false,
	});

	// Initialize Photoswipe
	const lightbox = new PhotoSwipeLightbox({
		gallery: '.swiper-container, .gallery',
		children: 'a',
		pswpModule: PhotoSwipe,
	});

	lightbox.init();