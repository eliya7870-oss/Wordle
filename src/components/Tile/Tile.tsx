import "./Tile.css";

function Tile({ letter }: { letter: string | null }) {
  return <div className="tile">{letter}</div>;
}
export default Tile;
