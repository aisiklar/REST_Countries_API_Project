import { useContext } from "react";
import { DisplayModeContext } from "../../DisplayModeContext";
import "./dayNightText.styles.scss";

const DayNightText = () => {
  const contextDisplayMode = useContext(DisplayModeContext);

  return (
    <>
      {contextDisplayMode === "dark-mode" ? (
        <div className="dayNightText">Light Mode</div>
      ) : (
        <div className="dayNightText light">Dark Mode</div>
      )}
    </>
  );
};
export default DayNightText;
