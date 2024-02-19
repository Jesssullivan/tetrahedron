import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const init = writable(false);

export const elemCarousel: Writable<HTMLDivElement> = writable();
export const query: Writable<Response> = writable();
export const slug: Writable<string> = writable('tigger');

export const pictures: Writable<string[]> = writable();

export const promise: Writable<Promise<string[]>> = writable(Promise.resolve([]));