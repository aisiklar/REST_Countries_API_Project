import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
//import { ReactComponent as MoonIcon } from "../../assets/moon-solid.svg";
import moonIcon from "../../assets/moon-solid.svg";
import reactIcon from "../../assets/react.svg";

const DayNightButton = () => {
  return (
    <div>
      <img src={moonIcon} alt='moon icon'></img>
      <img src={reactIcon} alt='react icon'></img>
    </div>
  );
};

export default DayNightButton;

{
  /*       <FontAwesomeIcon icon="fa-solid fa-moon" /> */
}
