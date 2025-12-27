import React from "react";
import Navitem from "./Navitem";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Drawer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Page content here */}
        {children}
        <Footer />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <Navitem />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
