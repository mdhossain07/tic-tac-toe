import "./App.css";
import Board from "./Components/Board";

function App() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-center my-10 text-blue-500">
        Tic Tac Toe Game
      </h2>
      <Board />
    </>
  );
}

export default App;
