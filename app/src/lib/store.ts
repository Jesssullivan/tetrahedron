import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const init = writable(false);

export const slug: Writable<string> = writable('tigger');

export const promise: Writable<Promise<string[]>> = writable(Promise.resolve([]));