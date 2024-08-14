'use strict';

class ImageZoom {
	constructor(image) {
		if (!image) {
			throw new Error('Image element is required');
		}

		this.image = image;

		this.backdrop = document.querySelector('[data-zoom-backdrop]');
		if (!this.backdrop) {
			this.backdrop = document.createElement('div');
			this.backdrop.setAttribute('data-zoom-backdrop', '');
			document.body.appendChild(this.backdrop);
		}

		this.zoomImage = this.zoomImage.bind(this);
		this.resetImage = this.resetImage.bind(this);
		this.resetImageComplete = this.resetImageComplete.bind(this);

		this.image.addEventListener('click', this.zoomImage);
	}

	zoomImage() {
		if (this.backdrop.getAttribute('data-zoom-active') === 'true') return;

		this.backdrop.setAttribute('data-zoom-active', 'true');

		this.image.removeEventListener('click', this.zoomImage);
		this.image.addEventListener('click', this.resetImage);
		this.backdrop.addEventListener('click', this.resetImage);
		document.addEventListener('keyup', this.resetImage);
		window.addEventListener('scroll', this.resetImage);
		window.addEventListener('resize', this.resetImage);

		this.backdrop.setAttribute('data-zoom-backdrop', 'active');
		this.image.setAttribute('data-zoom-image', 'active');

		const imageBCR = this.image.getBoundingClientRect();
		const scale = Math.min(window.innerWidth / imageBCR.width * 0.815, window.innerHeight / imageBCR.height * 0.815);
		const translateX = ((window.innerWidth - imageBCR.width) / 2) - imageBCR.left;
		const translateY = ((window.innerHeight - imageBCR.height) / 2) - imageBCR.top;

		requestAnimationFrame(() => {
			this.image.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
		});
	}

	resetImage(event) {
		if (event.type === 'keyup' && event.key !== 'Escape') return;

		window.removeEventListener('resize', this.resetImage);
		window.removeEventListener('scroll', this.resetImage);
		document.removeEventListener('keyup', this.resetImage);
		this.backdrop.removeEventListener('click', this.resetImage);
		this.image.removeEventListener('click', this.resetImage);
		this.image.addEventListener('click', this.zoomImage);

		this.backdrop.setAttribute('data-zoom-backdrop', '');

		this.image.style.transform = '';

		setTimeout(() => {
			this.image.setAttribute('data-zoom-image', 'data-zoom-image');
			this.backdrop.setAttribute('data-zoom-active', 'false');
		}, 300);
	}

	resetImageComplete() {
		this.image.removeEventListener('transitionend', this.resetImageComplete);
		this.backdrop.setAttribute('data-zoom-active', 'false');
		this.image.setAttribute('data-zoom-image', 'data-zoom-image');
	}
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('[data-zoom-image="data-zoom-image"]').forEach((img) => {
        if (img instanceof HTMLImageElement) {
            new ImageZoom(img);
        }
    });
});