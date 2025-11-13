import { atom } from "jotai";
import { WORDS } from "../common/Constants";

export const gameOverAtom = atom<boolean>(false);
export const triesAtom = atom<string[]>([]);
export const statsAtom = atom({
  played: 0,
  wins: 0,
  currentStreak: 0,
  maxStreak: 0,
});
export const solutionAtom = atom<string>(
  WORDS[Math.floor(Math.random() * WORDS.length)]
);
