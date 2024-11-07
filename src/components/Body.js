import React from "react";
import SideBar from "./SideBar/SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const menu = useSelector((store) => store.menu.isMenuOpen);

  return (
    <div
      className={`flex transition-all duration-300 ease-in-out ${
        menu ? "ml-64" : "ml-0"
      }`}
    >
      {menu && (
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-30">
          <SideBar />
        </div>
      )}
      <div
        className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
          menu ? "pl-4" : "pl-0"
        }`}
      >
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
