import { writable } from 'svelte/store';

export const modus = writable<Modus | null>(null);

export enum Modus {
  Easy,
  Medium,
  Advanced,
}

export const set_menu_easy = () => {
  return [
    { label: "Home", id: 1 },
    { label: "Letter Chasing", id: 3 },
    { label: "Tutorial", id: 2 },
    { label: "Animals", id: 6 },
    { label: "Numbers", id: 4 },
    { label: "Quiz", id: 5 },
  ];
};

// easy mode var
export const randomLetter = writable<string>(''); 
