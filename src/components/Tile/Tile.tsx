import "./Tile.css";

function Tile({ letter, status }: { letter: string | null; status: string }) {
  return (
    <div
      className="tile"
      style={
        {
          "--color": status === "correct" ? "green" : "none",
        } as React.CSSProperties
      }
    >
      {letter}
    </div>
  );
}
export default Tile;
