import CountryCard from "../country-card/CountryCard.component";
import { useContext, useEffect, useState } from "react";
import "./flags-container.styles.scss";
import { DisplayModeContext } from "../../DisplayModeContext";

const FlagsContainer = (props) => {
  const [countryData, setCountryData] = useState([]);
  const [filteredCountryData, setFilteredCountryData] = useState([]);
  const [stateClickedCountryArray, setStateClickedCountryArray] = useState([]);
  const [stateClickedCountryName, setStateClickedCountryName] = useState("");

  console.log("props.countryName received: ", props.countryName);
  //console.log("country data: ", country,Data);
  console.log("props.region received: ", props.region);
  //console.log("filteredCountryData: ", filteredCountryData);
  console.log("stateClickedCountryArray: ", stateClickedCountryArray);
  console.log("stateClickedCountryName: ", stateClickedCountryName);

  const contextDisplayMode = useContext(DisplayModeContext);

  // send the clicked Card info -an array - to bodycontainter comp.
  useEffect(() => {
    console.log("calling props.clickedCard[stateClickedCountryArray]");
    props.clickedCard(stateClickedCountryArray);
  }, [stateClickedCountryArray]);

  /*   useEffect(() => {
    console.log(
      "useEffect to assign countryName state upon change of props.countryName"
    );
    setCountryName(props.countryName);
  }, [props.countryName]);
 */

  // useEffect to fetch the all data from the API (works for once and on-mount)
  useEffect(() => {
    const getCountryInfo = async (region) => {
      console.log("Fetching all data");
      let fetchUrl = "";
      if (region == "all") {
        fetchUrl = "https://restcountries.com/v3.1/all";
      } else {
        fetchUrl = `https://restcountries.com/v3.1/region/${region}`;
      }
      try {
        console.log("fetchUrl: ", fetchUrl);
        const response = await fetch(fetchUrl);
        const data = await response.json();
        console.log("setting state countryData to countryData");
        setCountryData([...data]);
        setFilteredCountryData([...data]);
      } catch (error) {
        console.log("There is error: ", error);
      }
    };
    // function call for API fetch
    getCountryInfo(props.region);
  }, [props.region]);

  // find the array object
  useEffect(() => {
    let clickedCountry = filteredCountryData.filter(
      (country) => country.name.common == stateClickedCountryName
    );
    console.log("clickedCountry array: ", clickedCountry);
    setStateClickedCountryArray(clickedCountry);
  }, [stateClickedCountryName]);

  // useEffect to fetch if there is countryName
  useEffect(() => {
    console.log(
      "for filtering the country names... props.countryName: ",
      props.countryName
    );
    let filterData = countryData.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(props.countryName.toLowerCase())
    );
    console.log("setting state countryData to filteredCountryData");
    setFilteredCountryData([...filterData]);
  }, [props.countryName]);

  const cardClickHandler = (e) => {
    console.log("card clicked");
    let myVar = e.target.parentElement.children[1];
    console.log("clicked and passed in: ", myVar.firstChild.data);
    setStateClickedCountryName(myVar.firstChild.data);
  };

  return (
    <>
      {countryData.length > 0 ? (
        <div
          className={
            contextDisplayMode == "dark-mode"
              ? "flags-container"
              : "flags-container light"
          }
          onClick={cardClickHandler}
        >
          {filteredCountryData.map((data) => {
            return (
              <CountryCard
                key={filteredCountryData.indexOf(data)}
                flag={data.flags.svg}
                name={data.name.common}
                population={data.population}
                region={data.region}
                capital={data.capital ? data.capital[0] : "-"}
              ></CountryCard>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default FlagsContainer;
