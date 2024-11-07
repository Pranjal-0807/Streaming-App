import React from "react";

const YouSection = () => {
  return (
    <>
      <h1 className="my-4 py-1 text-lg font-semibold text-gray-800 border-b border-gray-300">
        You
      </h1>
      <ul className="space-y-2">
        <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer transition duration-200 ease-in-out">
          <span className="font-medium text-gray-700">Your Channel</span>
        </li>
        <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer transition duration-200 ease-in-out">
          <span className="font-medium text-gray-700">History</span>
        </li>
        <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer transition duration-200 ease-in-out">
          <span className="font-medium text-gray-700">Playlist</span>
        </li>
        <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer transition duration-200 ease-in-out">
          <span className="font-medium text-gray-700">Your Videos</span>
        </li>
      </ul>
    </>
  );
};

export default YouSection;
