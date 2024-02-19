import type { DrawerSettings } from '@skeletonlabs/skeleton';

export const acuityDrawerSettings: DrawerSettings = {
	id: 'Acuity',
	position: 'left',
	// Provide your property overrides:
	bgDrawer: 'bg-secondary-400',
	bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
	width: 'w-8-px',
	padding: 'p-2',
	rounded: 'rounded-xl',
};

export const contactDrawerSettings: DrawerSettings = {
	id: 'Contact',
	position: 'top',
	// Provide your property overrides:
	bgDrawer: 'bg-purple-800 text-white',
	bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
	width: 'sm:w-[400px] md:w-[480px]',
	padding: 'p-4',
	rounded: 'rounded-xl',
};

export function fetchImages(node: HTMLImageElement, url: RequestInfo | URL) {
	if (node instanceof HTMLImageElement) {
		updateImageSrc(node, url);
	}
	return {
		update: null,
		destroy: null
	};
}

function updateImageSrc(img: HTMLImageElement, imageUrl: RequestInfo | URL) {
	const update = async () => {
		try {
			const response = await self.fetch(imageUrl);
			if (response.ok) {
				const { avatar_url } = await response.json();
				img.src = avatar_url;
			} else {
				console.log('response: could not fetch imageUrl');
			}
		} catch (error) {
			console.log('error: while fetching imageUrl');
		}
	};
	update();
}

