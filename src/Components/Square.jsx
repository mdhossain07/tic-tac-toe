/* eslint-disable react/prop-types */
const Square = ({ value }) => {
  const handleSquare = () => {
    console.log("clicked....");
  };

  return (
    <>
      <button
        onClick={handleSquare}
        className="w-12 h-12 border border-gray-400 m-1"
      >
        {value}
      </button>
    </>
  );
};

export default Square;
