import { writable } from 'svelte/store';

export const screenWidth = writable(0);
export const screenHeight = writable(0);

export const title = writable('Home');
export const menuSidebar = writable(false);
export const authSidebar = writable(false);
export const isLoading = writable(false);