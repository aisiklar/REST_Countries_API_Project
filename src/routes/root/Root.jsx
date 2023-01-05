import Header from "../../components/header/Header.component";
import { Outlet } from "react-router-dom";
import "../../components/body-container/body-container.styles.scss";
import { DisplayModeContext } from "../DisplayModeContext";

const Root = () => {
  return (
    <>
      <DisplayModeContext.Provider value="contextDisplayMode">
        <Header></Header>
        {/*         <div styles={{ display: "none" }}>.</div> */}
        <Outlet></Outlet>
      </DisplayModeContext.Provider>
    </>
  );
};

export default Root;
