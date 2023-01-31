import "./dayNightButton.styles.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode"; // to switch to light mode
import { useContext } from "react";
import { DisplayModeContext } from "../../context";

const DayNightButton = () => {
  const contextDisplayMode = useContext(DisplayModeContext);

  return (
    <>
      <div className="icon-container">
        {contextDisplayMode === "dark-mode" ? (
          <LightModeIcon
            sx={{ fontSize: 20, color: "var(--color-darkmode)" }}
          ></LightModeIcon>
        ) : (
          <DarkModeIcon
            sx={{ fontSize: 20, color: "var(--color-lightmode);" }}
          ></DarkModeIcon>
        )}
      </div>
    </>
  );
};

export default DayNightButton;