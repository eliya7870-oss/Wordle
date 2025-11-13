import { BackspaceIcon } from "@phosphor-icons/react";
import { KEYBOARD_LAYOUT } from "../../common/Constants";
import "./Keyboard.css";
import { handleButtonClick } from "../../functions/functions";
import { useAtomValue } from "jotai";
import { triesAtom } from "../../store/atoms";

function Keyboard() {
  const tries = useAtomValue(triesAtom);
  function checkKey(key: string) {
    let hasGreen = false;
    let hasYellow = false;
    let hasDone = false;

    for (const attempt of tries) {
      for (const tile of attempt) {
        if (tile.letter === key) {
          if (tile.status === "green") {
            hasGreen = true;
          } else if (tile.status === "yellow") {
            hasYellow = true;
          } else if (tile.status === "done") {
            hasDone = true;
          }
        }
      }
    }

    // Return highest priority status found
    if (hasGreen) return "green";
    if (hasYellow) return "yellow";
    if (hasDone) return "done";
    return "empty";
  }
  return (
    <div className="keyboard">
      <div className="key-row">
        {KEYBOARD_LAYOUT[0].map((key) => (
          <div
            className="key"
            style={
              {
                "--color":
                  checkKey(key) === "green"
                    ? "#538d4e"
                    : checkKey(key) === "yellow"
                    ? "#b59f3b"
                    : checkKey(key) === "done"
                    ? "#3a3a3c"
                    : "grey",
              } as React.CSSProperties
            }
            onClick={() => {
              handleButtonClick(key);
            }}
          >
            {key}
          </div>
        ))}
      </div>
      <div className="key-row">
        <div className="empty-space"></div>
        {KEYBOARD_LAYOUT[1].map((key) => (
          <div
            className="key"
            style={
              {
                "--color":
                  checkKey(key) === "green"
                    ? "#538d4e"
                    : checkKey(key) === "yellow"
                    ? "#b59f3b"
                    : checkKey(key) === "done"
                    ? "#3a3a3c"
                    : "grey",
              } as React.CSSProperties
            }
            onClick={() => {
              handleButtonClick(key);
            }}
          >
            {key}
          </div>
        ))}
        <div className="empty-space"></div>
      </div>
      <div className="key-row">
        {KEYBOARD_LAYOUT[2].map((key) =>
          key === "BACKSPACE" ? (
            <div
              className="key big"
              style={
                {
                  "--color":
                    checkKey(key) === "green"
                      ? "#538d4e"
                      : checkKey(key) === "yellow"
                      ? "#b59f3b"
                      : checkKey(key) === "done"
                      ? "#3a3a3c"
                      : "grey",
                } as React.CSSProperties
              }
              onClick={() => {
                handleButtonClick("Backspace");
              }}
            >
              <BackspaceIcon style={{ fontSize: "30px" }} />
            </div>
          ) : key === "ENTER" ? (
            <div
              className="key big"
              style={
                {
                  "--color":
                    checkKey(key) === "green"
                      ? "#538d4e"
                      : checkKey(key) === "yellow"
                      ? "#b59f3b"
                      : checkKey(key) === "done"
                      ? "#3a3a3c"
                      : "grey",
                } as React.CSSProperties
              }
              onClick={() => {
                handleButtonClick("Enter");
              }}
            >
              {key}
            </div>
          ) : (
            <div
              className="key"
              style={
                {
                  "--color":
                    checkKey(key) === "green"
                      ? "#538d4e"
                      : checkKey(key) === "yellow"
                      ? "#b59f3b"
                      : checkKey(key) === "done"
                      ? "#3a3a3c"
                      : "grey",
                } as React.CSSProperties
              }
              onClick={() => {
                handleButtonClick(key);
              }}
            >
              {key}
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default Keyboard;
