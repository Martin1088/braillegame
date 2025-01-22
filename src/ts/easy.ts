import { invoke } from "@tauri-apps/api/core";
import { randomLetter } from "./store";

export async function updateContent() {
  try {
    // Call the Tauri command to get a random character
    let message = await invoke<string>("dynamic");
    randomLetter.set(message);
  } catch (error) {
    console.error("Error updating content:", error);
  }
}

export function checkLetter(event: Event & { currentTarget: EventTarget & HTMLInputElement }, counter: number, interval: number) {
  const value: string = (event.target as HTMLInputElement).value;
  let letter;
  randomLetter.subscribe((storedValue) => {
    letter = storedValue.toLowerCase();
  })();
  if (value === letter) {
    counter--;
  }
  if (counter === 0) {
    clearInterval(interval);
  }
} 
