/* script.js */

import PhotoSwipeLightbox from './photoswipe/photoswipe-lightbox.esm.js';

/**
 * Initialize a PhotoSwipeLightbox instance with customizable options.
 * @param {Object} options - Configuration options for the lightbox.
 */
function initLightbox(options) {
	if (document.querySelector(options.gallery)) {
		const lightbox = new PhotoSwipeLightbox({
			...options,
			pswpModule: () => import('./photoswipe/photoswipe.esm.js'),
		});
		lightbox.init();
	}
}

// Initialize galleries only if the relevant elements are present on the page
document.addEventListener('DOMContentLoaded', () => {
	initLightbox({
		gallery: '.gallery',
		children: '.item a',
		bgOpacity: 0.9,
		loop: false,
	});

	initLightbox({
		gallery: 'a.bigimage, .single-item a',
		bgOpacity: 0.9,
	});
});
