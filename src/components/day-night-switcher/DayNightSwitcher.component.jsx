import DayNightButton from "../day-night-button/DayNightButton.component";
import DayNightText from "../day-night-text/DayNightText.component";
import "./dayNightSelection.styles.scss";
import { useContext, useState } from "react";
import { DisplayModeContext } from "../../context";

const DayNightSwitcher = (props) => {
  const [displayMode, setDisplayMode] = useState("dark-mode");

  const changeDisplayMode = () => {
    if (displayMode == "dark-mode") {
      setDisplayMode("light-mode");
      props.displayMode("light-mode");
    } else {
      setDisplayMode("dark-mode");
      props.displayMode("dark-mode");
    }
  };

  return (
    <div className="day-night-selection">
      <div className="day-night-button" onClick={changeDisplayMode}>
        <DayNightButton></DayNightButton>
      </div>
      <div className="day-night-text">
        <DayNightText></DayNightText>
      </div>
    </div>
  );
};

export default DayNightSwitcher;
