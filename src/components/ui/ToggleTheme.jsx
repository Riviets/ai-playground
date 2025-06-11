import { useState } from "react";
import { sunIcon } from "../../assets/icons/sun";
import { moonIcon } from "../../assets/icons/moon";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`w-[55px] h-[30px] border-2 border-gray-800 rounded-full cursor-pointer absolute top-10 transition duration-300 ${
        isDarkMode ? "bg-blue-800" : "bg-white-50"
      }`}
    >
      <div
        className={`h-[20px] w-[20px] rounded-full absolute top-[50%] -translate-y-[50%] transition duration-300 ease-in-out left-1 ${
          isDarkMode
            ? "translate-x-0 bg-white-50"
            : "translate-x-[25px] bg-purple-700"
        }`}
      />
      <div
        className={`absolute right-[5px] top-1/2 -translate-y-1/2 transition duration-300 ease-in-out ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        {sunIcon}
      </div>
      <div
        className={`absolute left-1.5 top-1/2 -translate-y-1/2 transition duration-300 ease-in-out ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
      >
        {moonIcon}
      </div>
    </div>
  );
};

export default ToggleTheme;
