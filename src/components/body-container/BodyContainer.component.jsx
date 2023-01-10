import { Fragment } from "react";
import FlagsContainer from "../flags-container/FlagsContainer.component";
import RegionFilter from "../region-filter/RegionFilter.component";
import SearchInput from "../search-input/SearchInput.component";
import "./body-container.styles.scss";
import { useContext, useState } from "react";
import { DisplayModeContext } from "../../DisplayModeContext.js";

const BodyContainer = () => {
  const [region, setRegion] = useState("all");
  const [countryName, setCountryName] = useState("");
  const [submittedCountryName, setSubmittedCountryName] = useState("");

  const contextDisplayMode = useContext(DisplayModeContext);
  console.log("in BodyContainer, contextDisplayMode: ", contextDisplayMode);
  console.log("country name: ", countryName);

  console.log("region: ", region);
  console.log("submitted country name: ", submittedCountryName);

  const regionSelect = (selectedFilter) => {
    console.log("filter: ", selectedFilter);
    setRegion(selectedFilter);
  };

  const getCountryNameHandler = (countryName) => {
    setCountryName(countryName);
  };

  const getSubmittedNameHandler = (submittedName) => {
    console.log("submitted Name: ", submittedName);
    setSubmittedCountryName(submittedName);
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
            <SearchInput
              getCountryName={getCountryNameHandler}
              getSubmittedName={getSubmittedNameHandler}
            ></SearchInput>
          </div>
          <div className="regionFilter-container">
            <RegionFilter selectFilter={regionSelect}></RegionFilter>
          </div>
        </div>
        <div>
          <FlagsContainer
            region={region}
            countryName={countryName}
          ></FlagsContainer>
        </div>
      </div>
    </>
  );
};

export default BodyContainer;
