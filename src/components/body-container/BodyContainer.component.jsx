import { Fragment } from "react";
import FlagsContainer from "../flags-container/FlagsContainer.component";
import RegionFilter from "../region-filter/RegionFilter.component";
import SearchInput from "../search-input/SearchInput.component";
import "./body-container.styles.scss";

const BodyContainer = () => {
  return (
    <>
      <div className="body-wrapper">
        <div className="searchInput-container">
          <SearchInput></SearchInput>
        </div>
        <div className="regionFilter-container">
          <RegionFilter></RegionFilter>
        </div>
      </div>
      <div>
        <FlagsContainer></FlagsContainer>
      </div>
    </>
  );
};

export default BodyContainer;
