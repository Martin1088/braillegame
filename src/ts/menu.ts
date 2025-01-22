import { Modus, modus } from "./store";

export function setModus(level: Modus) {
  modus.set(level);
}
