import FlagsContainer from "../flags-container/FlagsContainer.component";
import RegionFilter from "../region-filter/RegionFilter.component";
import SearchInput from "../search-input/SearchInput.component";
import "./body-container.styles.scss";
import { useContext, useState } from "react";
import { DisplayModeContext } from "../../context.js";
import DetailedCard from "../detailedCard/DetailedCard.component";

const BodyContainer = () => {
  const [region, setRegion] = useState("all");
  const [countryName, setCountryName] = useState("");
  //const [submittedCountryName, setSubmittedCountryName] = useState("");
  const [clickedCardData, setClickedCardData] = useState([]);
  const [allCountryData, setAllCountryData] = useState([]);

  const contextDisplayMode = useContext(DisplayModeContext);
  
  const regionSelect = (selectedFilter) => {
    setRegion(selectedFilter);
  };

  const getCountryNameHandler = (countryName) => {
    setCountryName(countryName);
  };

  /* 
  const getSubmittedNameHandler = (submittedName) => {
    setSubmittedCountryName(submittedName);
  }; 
  */

  const clickCardHandler = (clickedCountryDetails, allCountries) => {
    if (clickedCountryDetails.length !== 0) {
      setClickedCardData(clickedCountryDetails);
    }
    setAllCountryData(allCountries);
  };

  const submitBackButtonHandler = (val) => {
    setClickedCardData([]);
    // this set the region to all... How to return to the previously selected region filter
    //and pass to regionfilter comp (so that it displays it)
    //setRegion("all");
  };

  if (clickedCardData.length !== 0) {
    return (
      <>
        <div>
          <DetailedCard
            submitBackButton={submitBackButtonHandler}
            detailedSelectedCardInfo={clickedCardData}
            allCountryData={allCountryData}
          ></DetailedCard>
        </div>
      </>
    );
  } else {
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
                /* getSubmittedName={getSubmittedNameHandler} */
              ></SearchInput>
            </div>
            <div className="regionFilter-container">
              <RegionFilter
                selectFilter={regionSelect}
                defaultValue={region}
              ></RegionFilter>
            </div>
          </div>
          <div>
            <FlagsContainer
              region={region}
              countryName={countryName}
              clickedCard={clickCardHandler}
            ></FlagsContainer>
          </div>
        </div>
      </>
    );
  }
};

export default BodyContainer;
