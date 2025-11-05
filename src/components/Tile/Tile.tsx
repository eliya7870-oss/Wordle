import "./Tile.css";

function Tile({
  result,
}: {
  result: { letter: string | null; status: string };
}) {
  return (
    <div
      className="tile"
      style={
        {
          "--color":
            result.status === "green"
              ? "#538d4e"
              : result.status === "yellow"
              ? "#b59f3b"
              : result.status === "done"
              ? "#3a3a3c"
              : "none",
        } as React.CSSProperties
      }
    >
      {result.letter}
    </div>
  );
}
export default Tile;
