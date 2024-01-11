import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [sqaures, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = calculateWinner(sqaures);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (isX ? "X" : "O");
  }

  const handleSquare = (i) => {
    if (calculateWinner(sqaures) || sqaures[i]) {
      return;
    }
    const nextSquares = sqaures.slice();
    if (isX) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "0";
    }
    setSquares(nextSquares);
    setIsX(!isX);
  };
  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <Square value={sqaures[0]} handleSquare={() => handleSquare(0)} />
        <Square value={sqaures[1]} handleSquare={() => handleSquare(1)} />
        <Square value={sqaures[2]} handleSquare={() => handleSquare(2)} />
      </div>
      <div className="flex">
        <Square value={sqaures[3]} handleSquare={() => handleSquare(3)} />
        <Square value={sqaures[4]} handleSquare={() => handleSquare(4)} />
        <Square value={sqaures[5]} handleSquare={() => handleSquare(5)} />
      </div>
      <div className="flex">
        <Square value={sqaures[6]} handleSquare={() => handleSquare(6)} />
        <Square value={sqaures[7]} handleSquare={() => handleSquare(7)} />
        <Square value={sqaures[8]} handleSquare={() => handleSquare(8)} />
      </div>
    </>
  );
};

const calculateWinner = (sqaures) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (sqaures[a] && sqaures[a] === sqaures[b] && sqaures[a] === sqaures[c]) {
      return sqaures[a];
    }
  }
  return null;
};

export default Board;
