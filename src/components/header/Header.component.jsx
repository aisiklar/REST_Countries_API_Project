import "./header.styles.scss";
import DayNightSwitcher from "../day-night-switcher/DayNightSwitcher.component";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  const [displayMode, setDisplayMode] = useState('dark-mode');
  console.log('Header rendered. State displayMode: ', displayMode);

  const displayModeHandler = (visMode) => {
    console.log('displayModeHandler called from dayNightSwitcher, passed in: ', visMode);
    setDisplayMode(visMode)
  }

  return (
    <>
      <main className={(
        displayMode==='dark-mode' ? "header-container": "header-container light")}>
        <p>Where in the world?</p>
        <div className="dayNightSwitcher-container">
          <DayNightSwitcher displayMode={displayModeHandler}></DayNightSwitcher>
        </div>
      </main>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
