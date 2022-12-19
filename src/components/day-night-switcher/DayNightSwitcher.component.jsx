import DayNightButton from "../day-night-button/DayNightButton.component";
import DayNightText from "../day-night-text/DayNightText.component";
import "./dayNightSelection.styles.scss";

const DayNightSwitcher = () => {
  return (
    <div className="day-night-selection">
      <div className="day-night-button">
        <DayNightButton></DayNightButton>
      </div>
      <div className="day-night-text">
        <DayNightText></DayNightText>
      </div>
    </div>
  );
};

export default DayNightSwitcher;
