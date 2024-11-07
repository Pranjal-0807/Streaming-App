import React from "react";

const MainNav = () => {
  return (
    <ul className="space-y-2">
      <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer transition duration-200 ease-in-out">
        <span className="font-medium text-gray-700">Home</span>
      </li>
      <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer transition duration-200 ease-in-out">
        <span className="font-medium text-gray-700">Shorts</span>
      </li>
      <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer transition duration-200 ease-in-out">
        <span className="font-medium text-gray-700">Subscription</span>
      </li>
    </ul>
  );
};

export default MainNav;
