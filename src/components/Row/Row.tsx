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
  return Array.from({ length }, (_, i) => (
    <Tile
      key={i}
      status={
        done && word ? (word[i] === solution[i] ? "correct" : "wrong") : "empty"
      }
      letter={word && word[i] ? word[i] : null}
    />
  ));
}

export default Row;
