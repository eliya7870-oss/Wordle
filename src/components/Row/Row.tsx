import Tile from "../Tile/Tile";
import "./Row.css";
function Row({ length }: { length: number }) {
  return Array.from({ length: length }, () => <Tile />);
}
export default Row;
