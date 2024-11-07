import React from "react";
import MainNav from "./MainNav";
import YouSection from "./YouSection";
import SubscriptionSection from "./SubscriptionSection";

const SideBar = () => {
  return (
    <div className="w-64 h-screen border-r border-gray-300 shadow-lg p-6 pt-24">
      {/* Main Navigation */}
      <MainNav />

      {/* You Section */}
      <YouSection />

      {/* Subscription Section */}
      <SubscriptionSection />
    </div>
  );
};

export default SideBar;
