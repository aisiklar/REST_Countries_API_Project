import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dayNightButton.styles.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode"; // to switch to light mode

const DayNightButton = (props) => {
  const displayMode = props.displayMode;

  console.log(
    "DayNightButton rendered. State displayMode is taken in as a props: ",
    displayMode
  );

  return (
    <>
      <div className="icon-container">
        {displayMode === "dark-mode" ? (
          <LightModeIcon
            sx={{ fontSize: 24, color: "hsl(0, 0%, 100%)" }}
          ></LightModeIcon>
        ) : (
          <DarkModeIcon sx={{ fontSize: 24, color: "black" }}></DarkModeIcon>
        )}
      </div>
    </>
  );
};

export default DayNightButton;

{
  /*       <FontAwesomeIcon icon="fa-solid fa-moon" /> */
}
