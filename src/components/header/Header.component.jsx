import "./header.styles.scss";
import DayNightSwitcher from "../day-night-switcher/DayNightSwitcher.component";
import { useContext, useEffect, useState } from "react";
import { DisplayModeContext } from "../../context";

const Header = (props) => {
  const contextDisplayMode = useContext(DisplayModeContext);
  const [displayMode, setDisplayMode] = useState("dark-mode");

  useEffect(() => {
    props.displayMode(displayMode);
  }, [displayMode]);

  const displayModeHandler = (visMode) => {
    setDisplayMode(visMode);
  };
                                                                                                                                                                                                            
  return (
    <>
      <main
        className={
          contextDisplayMode === "dark-mode"
            ? "header-container"
            : "header-container light"
        }
      >
        <p>Where in the world?</p>
        <div className="dayNightSwitcher-container">
          <DayNightSwitcher displayMode={displayModeHandler}></DayNightSwitcher>
        </div>
      </main>
    </>
  );
};

export default Header;
