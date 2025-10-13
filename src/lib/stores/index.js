import { writable } from 'svelte/store';

export const screenWidth = writable(0);
export const screenHeight = writable(0);

export const title = writable('Home');
export const sidebar = writable(false);