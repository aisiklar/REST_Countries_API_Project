import "./header.styles.scss";
import DayNightSwitcher from "../day-night-switcher/DayNightSwitcher.component";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  return (
    <>
      <main className="header-container">
        <p>Where in the world?</p>
        <div className="dayNightSwitcher-container">
          <DayNightSwitcher></DayNightSwitcher>
        </div>
      </main>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
