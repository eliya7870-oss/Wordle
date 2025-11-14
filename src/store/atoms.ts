import { atom } from "jotai";
import { WORDS } from "../common/Constants";

export const gameOverAtom = atom<boolean>(false);
export const triesAtom = atom<
  { letter: string; status: "green" | "yellow" | "empty" | "done" }[][]
>([]);
export const statsAtom = atom({
  played: 0,
  wins: 0,
  currentStreak: 0,
  maxStreak: 0,
  spread: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
});
export const solutionAtom = atom<string>(
  WORDS[Math.floor(Math.random() * WORDS.length)]
);
export const wordAtom = atom("");
export const modalOpenAtom = atom<boolean>(false);
