import { Fragment } from "react";
import FlagsContainer from "../flags-container/FlagsContainer.component";
import RegionFilter from "../region-filter/RegionFilter.component";
import SearchInput from "../search-input/SearchInput.component";
import "./body-container.styles.scss";
import { useContext, useState } from "react";
import { DisplayModeContext } from "../../DisplayModeContext.js";
import DetailedCard from "../detailedCard/DetailedCard.component";

const BodyContainer = () => {
  const [region, setRegion] = useState("all");
  const [countryName, setCountryName] = useState("");
  const [submittedCountryName, setSubmittedCountryName] = useState("");
  const [clickedCardData, setClickedCardData] = useState([]);
  const [defaultValueForSelect, setDefaultValueForSelect] = useState("");
  const [allCountryData, setAllCountryData] = useState([]);

  const contextDisplayMode = useContext(DisplayModeContext);
  //console.log("in BodyContainer, contextDisplayMode: ", contextDisplayMode);
  //console.log("country name: ", countryName);

  console.log("region: ", region);
  //console.log("submitted country name: ", submittedCountryName);
  console.log("defaultValueForSelect: ", defaultValueForSelect);

  const regionSelect = (selectedFilter) => {
    //  console.log("filter: ", selectedFilter);
    setRegion(selectedFilter);
    setDefaultValueForSelect(selectedFilter);
  };

  const getCountryNameHandler = (countryName) => {
    //  console.log("(re-)setting the country Name as state");
    setCountryName(countryName);
  };

  const getSubmittedNameHandler = (submittedName) => {
    //  console.log("submitted Name: ", submittedName);
    setSubmittedCountryName(submittedName);
  };

  const clickCardHandler = (clickedCountryDetails, allCountries) => {
    console.log(
      "passed in to bodyContainer, clicked card value: ",
      clickedCountryDetails
    );
    console.log(
      "clicked card info received from FlagsContainer comp: ",
      clickedCountryDetails[0]
    );
    console.log(
      "clicked card info received from FlagsContainer comp - typeof clickedCountryDetails[0]: ",
      typeof clickedCountryDetails[0]
    );
    if (clickedCountryDetails.length !== 0) {
      setClickedCardData(clickedCountryDetails);
    }
    console.log("all CountryData from FlagsContainer comp: ", allCountries);
    setAllCountryData(allCountries);
  };

  const submitBackButtonHandler = (val) => {
    console.log("button clicked in detailed card, received info: ", val);
    console.log("selected region (in submitBackButtonHandler): ", region);
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
                getSubmittedName={getSubmittedNameHandler}
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
