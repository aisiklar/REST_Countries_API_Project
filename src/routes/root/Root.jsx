import Header from "../../components/header/Header.component";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "../../components/body-container/body-container.styles.scss";
import { DisplayModeContext } from "../../context.js";

const Root = () => {
  const [rootDisplayMode, setRootDisplayMode] = useState("dark-mode");
  let contextDisplayMode = rootDisplayMode;

  const setDisplayMode = (value) => {
    setRootDisplayMode(value);
  };

  return (
    <>
      <DisplayModeContext.Provider value={contextDisplayMode}>
        <Header displayMode={setDisplayMode}></Header>
        <Outlet></Outlet>
      </DisplayModeContext.Provider>
    </>
  );
};

export default Root;
