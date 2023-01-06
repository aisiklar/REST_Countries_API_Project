import DayNightButton from "../day-night-button/DayNightButton.component";
import DayNightText from "../day-night-text/DayNightText.component";
import "./dayNightSelection.styles.scss";
import { useContext, useState } from "react";
import { DisplayModeContext } from "../../DisplayModeContext";

const DayNightSwitcher = (props) => {
  const [displayMode, setDisplayMode] = useState("dark-mode");
  console.log("DayNightSwitcher rendered. State displayMode: ", displayMode);

  const changeDisplayMode = () => {
    console.log("changeDisplayMode is clicked!");
    if (displayMode == "dark-mode") {
      setDisplayMode("light-mode");
      props.displayMode("light-mode");
    } else {
      setDisplayMode("dark-mode");
      props.displayMode("dark-mode");
    }
  };
  console.log("displayMode is set to: ", displayMode);

  return (
    <div className="day-night-selection">
      <div className="day-night-button" onClick={changeDisplayMode}>
        <DayNightButton displayMode={displayMode}></DayNightButton>
      </div>
      <div className="day-night-text">
        <DayNightText displayMode={displayMode}></DayNightText>
      </div>
    </div>
  );
};

export default DayNightSwitcher;
