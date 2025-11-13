import { useAtom, useAtomValue, useSetAtom } from "jotai";
import "./GameOverModal.css";
import {
  gameOverAtom,
  solutionAtom,
  statsAtom,
  triesAtom,
} from "../../store/atoms";
import { ArrowClockwiseIcon, XIcon } from "@phosphor-icons/react";
import { WORDS } from "../../common/Constants";
function GameOverModal() {
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const setTries = useSetAtom(triesAtom);
  const stats = useAtomValue(statsAtom);
  const setSolution = useSetAtom(solutionAtom);
  return (
    gameOver && (
      <div className="modal-overlay">
        <div className="modal">
          <XIcon
            className="x-icon"
            size={32}
            onClick={() => {
              setGameOver(false);
            }}
          />
          <h1 className="header">statistics</h1>
          <div className="stats-container">
            <div className="stat-container">
              <div className="stat">{stats.played}</div>
              <div className="label">Played</div>
            </div>
            <div className="stat-container">
              <div className="stat">{stats.wins}</div>
              <div className="label">Wins</div>
            </div>
            <div className="stat-container">
              <div className="stat">{stats.currentStreak}</div>
              <div className="label">Current streak</div>
            </div>
            <div className="stat-container">
              <div className="stat">{stats.maxStreak}</div>
              <div className="label">Max streak</div>
            </div>
          </div>
          <button
            className="retry-button"
            onClick={() => {
              setTries([]);
              setSolution(WORDS[Math.floor(Math.random() * WORDS.length)]);
              setGameOver(false);
            }}
          >
            <ArrowClockwiseIcon size={32} />
            try again
          </button>
        </div>
      </div>
    )
  );
}
export default GameOverModal;
