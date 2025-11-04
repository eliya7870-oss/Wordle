import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="main-container">
      <GameBoard length={5} height={6} />
      <Keyboard />
    </div>
  );
}

export default App;
