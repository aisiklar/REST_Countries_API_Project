import { Fragment } from "react";
import FlagsContainer from "../flags-container/FlagsContainer.component";
import RegionFilter from "../region-filter/RegionFilter.component";
import SearchInput from "../search-input/SearchInput.component";
import "./body-container.styles.scss";
import { useContext, useState } from "react";
import { DisplayModeContext } from "../../DisplayModeContext.js";

const BodyContainer = () => {
  const [region, setRegion] = useState("all");
  const contextDisplayMode = useContext(DisplayModeContext);
  console.log("in BodyContainer, contextDisplayMode: ", contextDisplayMode);

  console.log("region: ", region);

  const regionSelect = (selectedFilter) => {
    console.log("filter: ", selectedFilter);
    setRegion(selectedFilter);
  };
                                                                                      
  return (
    <>
      <div
        className={
          contextDisplayMode == "dark-mode"
            ? "body-container"
            : "body container light"
        }
      >
        <div
          className={
            contextDisplayMode == "dark-mode"
              ? "body-wrapper"
              : "body-wrapper light"
          }
        >
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
