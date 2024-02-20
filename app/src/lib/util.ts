import type { DrawerSettings } from '@skeletonlabs/skeleton';

export const menuDrawerSettings: DrawerSettings = {
	id: 'menu',
	position: 'left',
	// Provide your property overrides:
	bgDrawer: 'bg-secondary-400',
	bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
	width: 'w-8-px',
	padding: 'p-2',
	rounded: 'rounded-xl',
};

export const loginDrawerSettings: DrawerSettings = {
	id: 'login',
	position: 'top',
	// Provide your property overrides:
	bgDrawer: 'bg-purple-800 text-white',
	bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
	width: 'sm:w-[400px] md:w-[480px]',
	padding: 'p-4',
	rounded: 'rounded-xl',
};