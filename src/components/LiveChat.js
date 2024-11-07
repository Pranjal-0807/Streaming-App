import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addChat } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomName } from "../utils/Helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [send, setSend] = useState("");
  const chats = useSelector((store) => store.chat.chats);

  useEffect(() => {
    const timer = setInterval(
      () =>
        dispatch(
          addChat({
            name: generateRandomName(),
            message: generateRandomMessages(30),
          })
        ),
      1000
    );

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <div className="p-4 w-full max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h1 className="font-bold text-xl mb-4 text-gray-800">Live Chat</h1>

      {/* Chat Window */}
      <div className="w-full h-[430px] border border-gray-300 rounded-lg overflow-y-scroll flex flex-col-reverse bg-gray-50 p-2 space-y-2 space-y-reverse">
        <div>
          {chats.map((chat, index) => (
            <ChatMessage key={index} data={chat} />
          ))}
        </div>
      </div>

      {/* Input Section */}
      <div className="flex mt-4">
        <input
          value={send}
          onChange={(e) => setSend(e.target.value)}
          className="w-3/4 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          placeholder="Type a message..."
        />
        <button
          onClick={() => {
            if (send.trim() !== "") {
              dispatch(
                addChat({
                  name: "raghav",
                  message: send,
                })
              );
              setSend("");
            }
          }}
          className="w-1/4 bg-green-500 text-white rounded-r-lg p-2 hover:bg-green-600 transition duration-200 ease-in-out"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat; 
