import { writable } from 'svelte/store';
const defaultsettings = {
    fontSize: 14,
    colorScheme: 'dark',
    language: 'en',
}
function createCount() {
    const { subscribe, set, update } = writable(defaultsettings);

    return {
        subscribe,
        set,
        update,
        increment: () => update((defaultsettings) => ({
            ...defaultsettings,
            fontSize: String(Number(defaultsettings.fontSize) + 1)
        })),
        toggoleLang: () =>
            update((defaultsettings) => ({
                ...defaultsettings,
                language: defaultsettings.language === 'en' ? 'ar' : 'en'
            })),

        decrement: () => update((defaultsettings) => ({
            ...defaultsettings,
            fontSize: String(Number(defaultsettings.fontSize) - 1),
        })),
        reset: () => { set(defaultsettings) }
    };
}

export const settings = createCount();
