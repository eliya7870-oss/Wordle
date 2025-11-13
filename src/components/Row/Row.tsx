import { useAtomValue } from "jotai";
import Tile from "../Tile/Tile";
import "./Row.css";
import { triesAtom, wordAtom } from "../../store/atoms";

function Row({ length, index }: { length: number; index: number }) {
  const tries = useAtomValue(triesAtom);
  const word = useAtomValue(wordAtom);
  const formatted = Array.from({ length: 5 }, (_, i) => ({
    letter: word.length > i ? word[i] : null,
    status: "empty",
  }));
  const result =
    index === tries.length
      ? formatted
      : index <= tries.length - 1
      ? tries[index]
      : Array.from({ length: 5 }, () => ({ letter: null, status: "empty" }));
  return Array.from({ length }, (_, i) => (
    <Tile key={`${index},${i}`} result={result[i]} />
  ));
}

export default Row;
