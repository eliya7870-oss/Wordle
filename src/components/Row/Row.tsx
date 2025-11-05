import { checkWord } from "../../functions/functions";
import Tile from "../Tile/Tile";
import "./Row.css";

function Row({
  length,
  word,
  done,
  solution = "AVIVA", // optional prop
}: {
  length: number;
  word: string | null;
  done: boolean;
  solution?: string;
}) {
  const result = checkWord(word, solution, done);
  return Array.from({ length }, (_, i) => <Tile key={i} result={result[i]} />);
}

export default Row;
