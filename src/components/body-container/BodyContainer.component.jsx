import { Fragment } from "react";
import FlagsContainer from "../flags-container/FlagsContainer.component";
import RegionFilter from "../region-filter/RegionFilter.component";
import SearchInput from "../search-input/SearchInput.component";
import "./body-container.styles.scss";
import { useState } from "react";

const BodyContainer = () => {
  const [region, setRegion] = useState("all");
  console.log("region: ", region);

  const regionSelect = (selectedFilter) => {
    console.log("filter: ", selectedFilter);
    setRegion(selectedFilter);
  };

  return (
    <>
      <div className="body-container">
        <div className="body-wrapper">
          <div className="searchInput-container">
            <SearchInput></SearchInput>
          </div>
          <div className="regionFilter-container">
            <RegionFilter selectFilter={regionSelect}></RegionFilter>
          </div>
        </div>
        <div>
          <FlagsContainer region={region}></FlagsContainer>
        </div>
      </div>
    </>
  );
};

export default BodyContainer;
