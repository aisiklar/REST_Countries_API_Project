import Header from "../../components/header/Header.component";
import { Outlet } from "react-router-dom";
import "../../components/body-container/body-container.styles.scss";

const Root = () => {
  return (
    <>
      <Header></Header>
      {/*         <div styles={{ display: "none" }}>.</div> */}
      <Outlet></Outlet>
    </>
  );
};

export default Root;
