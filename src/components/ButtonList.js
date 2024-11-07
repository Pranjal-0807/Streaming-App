import React from "react";
import Button from "./Button";

const list = ["All", "Harkirat", "Akshay", "Raghav", "CBA", "TMKOC", "Beast"];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap justify-center mb-4">
      {list.map((category, index) => (
        <Button key={index} name={category} />
      ))}
    </div>
  );
};

export default ButtonList;
