import { useAtom, useAtomValue, useSetAtom } from "jotai";
import "./GameOverModal.css";
import {
  gameOverAtom,
  modalOpenAtom,
  solutionAtom,
  statsAtom,
  triesAtom,
} from "../../store/atoms";
import { ArrowClockwiseIcon, XIcon } from "@phosphor-icons/react";
import { WORDS } from "../../common/Constants";
function GameOverModal() {
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const [modalOpen, setModalOpen] = useAtom(modalOpenAtom);
  const [tries, setTries] = useAtom(triesAtom);
  const stats = useAtomValue(statsAtom);
  const setSolution = useSetAtom(solutionAtom);
  return (
    modalOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <XIcon
            className="x-icon"
            size={32}
            onClick={() => {
              setModalOpen(false);
            }}
          />
          <h1 className="header">statistics</h1>
          <div className="stats-container">
            <div className="stat-container">
              <div className="stat">{stats.played}</div>
              <div className="label">Played</div>
            </div>
            <div className="stat-container">
              <div className="stat">
                {stats.wins ? (stats.wins / stats.played) * 100 : 0}
              </div>
              <div className="label">Win %</div>
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
          <h1 className="header">guess distribution</h1>
          <div className="guess-distribution">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="graph-container">
                <div className="guess">{i + 1}</div>
                <div
                  className="graph"
                  style={
                    {
                      "--width": `${
                        stats.spread[i + 1 as keyof typeof stats.spread]
                          ? (stats.spread[i + 1 as keyof typeof stats.spread] / stats.played) * 100
                          : 7
                      }%`,
                      "--color":
                        gameOver && tries.length == i + 1
                          ? "#538d4e"
                          : "#3a3a3c",
                    } as React.CSSProperties
                  }
                >
                  {stats.spread[i + 1 as keyof typeof stats.spread]}
                </div>
              </div>
            ))}
          </div>
          {gameOver && (
            <button
              className="retry-button"
              onClick={() => {
                setTries([]);
                setSolution(WORDS[Math.floor(Math.random() * WORDS.length)]);
                setGameOver(false);
                setModalOpen(false);
              }}
            >
              <ArrowClockwiseIcon size={32} />
              try again
            </button>
          )}
        </div>
      </div>
    )
  );
}
export default GameOverModal;
