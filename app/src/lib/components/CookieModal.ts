import type { ModalSettings } from '@skeletonlabs/skeleton';

export function getCookie(cname: string): boolean {
	const name = cname + '=';
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return !!c.substring(name.length, c.length);
		}
	}
	return false;
}

export function CookieModal(
	fn: { trigger: (arg0: ModalSettings) => void }): Promise<boolean> {
	return new Promise<boolean>((resolve, reject) => {
		// !
		if (!getCookie('Tetrah')) {
			const modal: ModalSettings = {
				type: 'confirm',
				buttonTextCancel: 'To Tetrahedron',
				buttonTextConfirm: 'To Discord',
				title: '🏳️‍🌈 Welcome to the 3rd dimension ⚧️',
				body:
					'Tetrahedron.gay is a mutual aid mental health group informally continuing the structured partial hospitalization Triangle Program.\n' +
					'\n',
				response: (r: boolean) => {
					if (r) {
						document.cookie = 'Tetrah=1; max-age=86400; path=/;';
						console.log('new cookie: ' + getCookie('Tetrah'));
						window.open('https://discord.gg/uCkAuUpu9Y', '_self');
						resolve(true);
					} else {
						document.cookie = 'Tetrah=1; max-age=86400; path=/;';
						console.log('new cookie: ' + getCookie('Tetrah'));
						resolve(true);
					}
				}
			};
			fn.trigger(modal);
		} else {
			resolve(true);
		}
	});
}