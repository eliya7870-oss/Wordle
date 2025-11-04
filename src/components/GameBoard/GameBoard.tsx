import { useEffect, useState } from "react";
import Row from "../Row/Row";
import "./GameBoard.css";
function GameBoard({ length, height }: { length: number; height: number }) {
  const [word, setWord] = useState("");
  const [tries, setTries] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && word.length === 5) {
        setTries((prev) => [...prev, word]);
        setWord("");
      } else {
        setWord((prev) => {
          if (e.key === "Backspace") return prev.slice(0, -1);
          else if (prev.length >= 5) return prev;
          else if (e.code === `Key${e.key.toUpperCase()}`) {
            return prev + e.key.toUpperCase();
          } else {
            return prev;
          }
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [word]);
  return (
    <div
      className="board-container"
      style={{ "--columns": length } as React.CSSProperties}
    >
      {Array.from({ length: height }, (_, i) => (
        <Row
          word={
            tries.length < i + 1 ? (i === tries.length ? word : "") : tries[i]
          }
          done={tries.length >= i + 1}
          length={length}
        />
      ))}
    </div>
  );
}
export default GameBoard;
