import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-200 text-gray-700 hover:bg-gray-300  transition duration-300 ease-in-out m-2 rounded-full px-4 py-2 text-sm font-medium shadow-sm w-24 h-10">
      {name}
    </button>
  );
};

export default Button;
