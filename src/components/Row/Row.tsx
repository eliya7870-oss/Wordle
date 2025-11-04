import Tile from "../Tile/Tile";
import "./Row.css";
function Row({ length, word }: { length: number; word: string | null }) {
  return Array.from({ length: length }, (_, i) => (
    <Tile letter={word ? word[i] : null} />
  ));
}
export default Row;
