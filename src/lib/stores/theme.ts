import { writable } from 'svelte/store';

export const colorTheme = writable<string>('default');

export function setColorTheme(theme: string) {
    colorTheme.set(theme);
    document.documentElement.className = theme;
}
