import Row from "../Row/Row";
import "./GameBoard.css";
function GameBoard({ length, height }: { length: number; height: number }) {
  return (
    <div
      className="board-container"
      style={{ "--columns": length } as React.CSSProperties}
    >
      {Array.from({ length: height }, () => (
        <Row word={"funny"} length={length} />
      ))}
    </div>
  );
}
export default GameBoard;
