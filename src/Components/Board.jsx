import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [sqaures, setSquares] = useState(Array(9).fill(null));

  const handleSquare = (i) => {
    const nextSquares = sqaures.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  };
  return (
    <>
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

export default Board;
