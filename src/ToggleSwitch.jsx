import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setisOn] = useState(false);

  const handleToggleSwitch = () => {
    setisOn(!isOn);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div
          className={`w-28 h-14 flex items-center ${
            isOn ? "bg-green-700" : "bg-red-600"
          } rounded-full p-1 cursor-pointer transition-colors duration-500 ease-in-out relative`}
          onClick={handleToggleSwitch}
        >
          <div
            className={`bg-white w-12 h-12 rounded-full shadow-lg transform transition-transform duration-500 ease-in-out flex items-center justify-center ${
              isOn ? "translate-x-14" : "translate-x-0"
            }`}
          >
            <span className="text-black font-bold select-none text-sm">
              {isOn ? "ON" : "OFF"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;
