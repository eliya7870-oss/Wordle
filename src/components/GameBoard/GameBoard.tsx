import { useEffect } from "react";
import Row from "../Row/Row";
import "./GameBoard.css";
import { useAtom, useSetAtom } from "jotai";
import {
  gameOverAtom,
  solutionAtom,
  statsAtom,
  triesAtom,
  wordAtom,
} from "../../store/atoms";
import { checkWord } from "../../functions/functions";

function GameBoard({ length, height }: { length: number; height: number }) {
  const [word, setWord] = useAtom(wordAtom);
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
  }, [tries.length, gameOver, setStats, setGameOver]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;
      if (e.key === "Enter" && word.length === 5) {
        if (word === solution) {
          setGameOver(true);
          setStats((prevstats) => ({
            ...prevstats,
            played: prevstats.played + 1,
            wins: prevstats.wins + 1,
            currentStreak: prevstats.currentStreak + 1,
            maxStreak: Math.max(
              prevstats.maxStreak,
              prevstats.currentStreak + 1
            ),
          }));
        }
        setTries((prev) => [...prev, checkWord(word, solution, true)]);
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
  }, [word, gameOver, solution, setWord, setTries, setGameOver, setStats]);

  return (
    <div
      className="board-container"
      style={{ "--columns": length } as React.CSSProperties}
    >
      {Array.from({ length: height }, (_, i) => (
        <Row key={i} index={i} length={length} />
      ))}
    </div>
  );
}

export default GameBoard;
