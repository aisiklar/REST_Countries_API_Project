import Header from "../../components/header/Header.component";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "../../components/body-container/body-container.styles.scss";
import { DisplayModeContext } from "../../DisplayModeContext.js";

const Root = () => {
  const [rootDisplayMode, setRootDisplayMode] = useState("dark-mode");
  let contextDisplayMode = rootDisplayMode;
  console.log("in root, contextDisplayMode: ", contextDisplayMode);

  const setDisplayMode = (value) => {
    console.log(
      "in Root, setDisplayMode is run with value from header: ",
      value
    );
    setRootDisplayMode(value);
  };

  return (
    <>
      <DisplayModeContext.Provider value={contextDisplayMode}>
        <Header displayMode={setDisplayMode}></Header>
        {/*         <div styles={{ display: "none" }}>.</div> */}
        <Outlet></Outlet>
      </DisplayModeContext.Provider>
    </>
  );
};

export default Root;
