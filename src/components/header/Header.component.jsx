import "./header.styles.scss";
import DayNightSwitcher from "../day-night-switcher/DayNightSwitcher.component";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <main className="header-container">
        <h2>Where in the world?</h2>
        <div className="dayNightSwitcher-container">
          <DayNightSwitcher></DayNightSwitcher>
        </div>
      </main>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
