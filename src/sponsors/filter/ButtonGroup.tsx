import { useState } from "react";

function ButtonGroup() {
  const [activeButton, setActiveButton] = useState(1); // Initial active button state

  const handleClick = (index: number) => {
    setActiveButton(index);
  };

  const buttonColors = ["DASHBOARD", "HOMIYLAR", "TALABALAR"]; // Array of button colors

  return (
    <div className="flex justify-center button-group">
      {buttonColors.map((item, index) => (
        <button
          key={item}
          className={`font-bold px-4   ${
            activeButton === 1 ? `` : `rounded-md`
          } ${
            activeButton === index
              ? `bg-blue-500 text-white`
              : `bg-gray-200 hover:bg-gray-300`
          }`}
          onClick={() => handleClick(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
