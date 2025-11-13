import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import GameOverModal from "./components/GameOverModal/GameOverModal";
import Header from "./components/Header/Header";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="main-container">
      <Header />
      <GameBoard length={5} height={6} />
      <Keyboard />
      <GameOverModal />
    </div>
  );
}

export default App;
