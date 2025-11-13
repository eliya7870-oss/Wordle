import { BackspaceIcon } from "@phosphor-icons/react";
import { KEYBOARD_LAYOUT } from "../../common/Constants";
import "./Keyboard.css";
function Keyboard() {
  return (
    <div className="keyboard">
      <div className="key-row">
        {KEYBOARD_LAYOUT[0].map((key) => (
          <div className="key">{key}</div>
        ))}
      </div>
      <div className="key-row">
        <div className="empty-space"></div>
        {KEYBOARD_LAYOUT[1].map((key) => (
          <div className="key">{key}</div>
        ))}
        <div className="empty-space"></div>
      </div>
      <div className="key-row">
        {KEYBOARD_LAYOUT[2].map((key) =>
          key == "BACKSPACE" ? (
            <div className="key big">
              <BackspaceIcon style={{ fontSize: "30px" }} />
            </div>
          ) : key == "ENTER" ? (
            <div className="key big">{key}</div>
          ) : (
            <div className="key">{key}</div>
          )
        )}
      </div>
    </div>
  );
}
export default Keyboard;
