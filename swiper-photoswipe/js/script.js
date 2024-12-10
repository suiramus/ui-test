
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';
import PhotoSwipe from './photoswipe.esm.min.js';

	// Initialize Swiper
	const swiper1 = new Swiper('.swiper-1', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 1,
		spaceBetween: 10,
		// loop: true,
	});
	
	// Initialize Swiper 2 without Photoswipe
	const swiper2 = new Swiper('.swiper-2', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 1,
		spaceBetween: 10,
		// loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	
	// Initialize Swiper 3
	const swiper3 = new Swiper('.swiper-3', {
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
	});

	// Initialize Photoswipe
	const lightbox1 = new PhotoSwipeLightbox({
		gallery: '.swiper-1, .gallery',
		children: 'a',
		pswpModule: PhotoSwipe,
	});
	lightbox1.init();
	
	
	// Initialize Photoswipe for single image
	const lightbox2 = new PhotoSwipeLightbox({
		gallery: '.lb-single',
		// children: '', // https://photoswipe.com/options/#lightbox-module-options
		children: false,
		pswpModule: PhotoSwipe,
	});
	lightbox2.init();