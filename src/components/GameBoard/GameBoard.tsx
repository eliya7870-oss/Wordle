import { useEffect, useState } from "react";
import Row from "../Row/Row";
import "./GameBoard.css";
import { useAtom, useSetAtom } from "jotai";
import {
  gameOverAtom,
  solutionAtom,
  statsAtom,
  triesAtom,
} from "../../store/atoms";
function GameBoard({ length, height }: { length: number; height: number }) {
  const [word, setWord] = useState("");
  const [tries, setTries] = useAtom(triesAtom);
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const setStats = useSetAtom(statsAtom);
  const [solution] = useAtom(solutionAtom);

  useEffect(() => {
    if (tries.length >= 6 && !gameOver) {
      setStats((prevstats) => ({
        ...prevstats,
        played: prevstats.played + 1,
        currentStreak: 0,
      }));
      setGameOver(true);
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;
      if (e.key === "Enter" && word.length === 5) {
        if (word == solution) {
          setGameOver(true);
          setStats((prevstats) => ({
            ...prevstats,
            played: prevstats.played + 1,
            wins: prevstats.wins + 1,
            currentStreak: prevstats.currentStreak + 1,
            maxStreak:
              prevstats.currentStreak == prevstats.maxStreak
                ? prevstats.maxStreak + 1
                : prevstats.maxStreak,
          }));
        }
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
  }, [word, gameOver]);
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
