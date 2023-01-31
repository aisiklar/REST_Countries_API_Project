import CountryCard from "../country-card/CountryCard.component";
import { useContext, useEffect, useState } from "react";
import "./flags-container.styles.scss";
import { DisplayModeContext } from "../../context";

const FlagsContainer = (props) => {
  const [countryData, setCountryData] = useState([]);
  const [filteredCountryData, setFilteredCountryData] = useState([]);
  const [stateClickedCountryArray, setStateClickedCountryArray] = useState([]);
  const [stateClickedCountryName, setStateClickedCountryName] = useState("");

  const contextDisplayMode = useContext(DisplayModeContext);

  // send the clicked Card info -an array - to bodycontainter comp.
  useEffect(() => {
    props.clickedCard(stateClickedCountryArray, countryData);
  }, [stateClickedCountryArray]);

  // useEffect to fetch the all data from the API (works on-mount and...
  // upon change of props.region)
  useEffect(() => {
    // Fetching all data or region data
    const getCountryInfo = async (region) => {
      let fetchUrl = "";
      if (region == "all") {
        fetchUrl = "https://restcountries.com/v3.1/all";
      } else {
        fetchUrl = `https://restcountries.com/v3.1/region/${region}`;
      }
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setCountryData([...data]);
        setFilteredCountryData([...data]);
      } catch (error) {
        console.log("There is error: ", error);
      }
    };
    // function call for API fetch
    getCountryInfo(props.region);
  }, [props.region]);

  // find the clicked country array obj
  // runs on mount and upon change of stateClickedCountryName
  useEffect(() => {
    let clickedCountry = filteredCountryData.filter(
      (country) => country.name.common == stateClickedCountryName
    );
    setStateClickedCountryArray(clickedCountry);
  }, [stateClickedCountryName]);

  // useEffect to fetch data if there is countryName from bodyContainer (which receives...
  // data from SearchInput)
  useEffect(() => {
    let filterData = countryData.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(props.countryName.toLowerCase())
    );
    //console.log("setting state countryData to filteredCountryData");
    setFilteredCountryData([...filterData]);
  }, [props.countryName]);

  const cardClickHandler = (e) => {
    let myVar = e.target.parentElement.children[1];
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
