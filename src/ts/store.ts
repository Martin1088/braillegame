
import { writable } from 'svelte/store';

export const modus = writable<number | null>(null);

export const set_menu_easy = () => {
  return [
    { label: "Letter Chasing", id: 1 },
    { label: "Tutorial", id: 2 },
    { label: "Animals", id: 3 },
    { label: "Numbers", id: 4 },
    { label: "Quiz", id: 5 },
  ];
};
