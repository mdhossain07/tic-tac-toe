/* eslint-disable react/prop-types */
const Square = ({ value, handleSquare }) => {
  return (
    <>
      <button
        onClick={handleSquare}
        className="w-14 h-14 border border-gray-400 m-1 text-xl"
      >
        {value}
      </button>
    </>
  );
};

export default Square;
