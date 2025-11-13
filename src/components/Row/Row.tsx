import { useAtomValue } from "jotai";
import { checkWord } from "../../functions/functions";
import Tile from "../Tile/Tile";
import "./Row.css";
import { solutionAtom } from "../../store/atoms";

function Row({
  length,
  word,
  done,
}: {
  length: number;
  word: string | null;
  done: boolean;
}) {
  const solution = useAtomValue(solutionAtom);
  const result = checkWord(word, solution, done);
  return Array.from({ length }, (_, i) => <Tile key={i} result={result[i]} />);
}

export default Row;
