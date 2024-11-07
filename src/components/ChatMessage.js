import React from "react";
import { user_Icon } from "../utils/Constants";

const ChatMessage = ({ data }) => {
  const { name, message } = data;

  return (
    <div className="flex items-start p-4 hover:bg-gray-50 transition duration-300 ease-in-out rounded-lg shadow-md">
      {/* User Icon */}
      <img
        className="w-12 h-12 rounded-full mr-4 border-2 border-blue-400 transition-transform duration-300 transform hover:scale-110"
        src={user_Icon}
        alt="User Icon"
      />

      {/* Message Content */}
      <div className="flex flex-col">
        <span className="font-bold text-gray-800">{name}</span>
        <span className="text-gray-700 mt-1 text-sm">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
