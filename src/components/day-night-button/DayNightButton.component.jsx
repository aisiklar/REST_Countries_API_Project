import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dayNightButton.styles.scss";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode'; // to switch to light mode

const DayNightButton = () => {
  return (
    <>
      <div className="icon-container">
        <DarkModeIcon sx={{ fontSize: 24, color: 'hsl(0, 0%, 100%)' }}></DarkModeIcon>
      </div>
    </>
  );
};

export default DayNightButton;

{
  /*       <FontAwesomeIcon icon="fa-solid fa-moon" /> */
}
