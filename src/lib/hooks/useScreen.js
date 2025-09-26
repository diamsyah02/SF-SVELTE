import { derived } from 'svelte/store';
import { screenWidth, screenHeight } from '../stores/index.js';

// Tailwind breakpoints (default):
// sm: 640px, md: 768px, lg: 1024px, xl: 1280px
export const isSm = derived(screenWidth, ($w) => $w >= 640);
export const isMd = derived(screenWidth, ($w) => $w >= 768);
export const isLg = derived(screenWidth, ($w) => $w >= 1024);
export const isXl = derived(screenWidth, ($w) => $w >= 1280);

export const isMobile = derived(screenWidth, ($w) => $w < 640);
export const isTablet = derived(screenWidth, ($w) => $w >= 640 && $w < 1024);
export const isDesktop = derived(screenWidth, ($w) => $w >= 1024);

export function initScreenWatcher() {
	if (typeof window === 'undefined') return;

	const update = () => {
		screenWidth.set(window.innerWidth);
		screenHeight.set(window.innerHeight);
	};

	update();
	window.addEventListener('resize', update);

	return () => window.removeEventListener('resize', update);
}
