import "./header.styles.scss";
import DayNightSwitcher from "../day-night-switcher/DayNightSwitcher.component";
import { useContext, useEffect, useState } from "react";
import { DisplayModeContext } from "../../DisplayModeContext";

const Header = (props) => {
  const contextDisplayMode = useContext(DisplayModeContext);

  const [displayMode, setDisplayMode] = useState("dark-mode");
  console.log("Header rendered. State displayMode: ", displayMode);
  console.log("in Header, contextDisplayMode: ", contextDisplayMode);

  useEffect(() => {
    props.displayMode(displayMode);
  }, [displayMode]);

  const displayModeHandler = (visMode) => {
    console.log(
      "displayModeHandler called from dayNightSwitcher, passed in: ",
      visMode
    );
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
