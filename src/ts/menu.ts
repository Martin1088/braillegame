import { modus } from "./store";

export function setModus(level: number) {
  modus.set(level);
}
