import { Fragment } from "react";
import FlagsContainer from "../flags-container/FlagsContainer.component";
import RegionFilter from "../region-filter/RegionFilter.component";
import SearchInput from "../search-input/SearchInput.component";
import "./body-container.styles.scss";

const BodyContainer = () => {
  return (
    <>
      <div className="body-container">
        <div styles={{ display: "none" }}>.</div>
        <div>
          <SearchInput></SearchInput>
          <RegionFilter></RegionFilter>
        </div>
        <div>
          <FlagsContainer></FlagsContainer>
        </div>
      </div>
    </>
  );
};

export default BodyContainer;
