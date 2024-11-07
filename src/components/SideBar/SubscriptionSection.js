import React from "react";

const SubscriptionSection = () => {
  return (
    <>
      <h1 className="my-4 py-1 text-lg font-semibold text-gray-800 border-b border-gray-300">
        Subscription
      </h1>
      <ul className="space-y-2">
        <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer transition duration-200 ease-in-out">
          <span className="font-medium text-gray-700">Harkirat</span>
        </li>
        <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer transition duration-200 ease-in-out">
          <span className="font-medium text-gray-700">Akshay</span>
        </li>
        <li className="hover:bg-gray-100 rounded-md p-2 cursor-pointer transition duration-200 ease-in-out">
          <span className="font-medium text-gray-700">Tanmay</span>
        </li>
      </ul>
    </>
  );
};

export default SubscriptionSection;
