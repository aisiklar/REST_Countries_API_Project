import CountryCard from "../country-card/CountryCard.component";
import { useContext, useEffect, useState } from "react";
import "./flags-container.styles.scss";
import { DisplayModeContext } from "../../DisplayModeContext";

const FlagsContainer = (props) => {
  const [countryData, setCountryData] = useState([]);

  console.log("props.countryName: ", props.countryName);
  //console.log("country data: ", countryData);
  console.log("region props received: ", props.region);
  console.log("country name props received: ", props.countryName);

  const contextDisplayMode = useContext(DisplayModeContext);

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
        if (props.countryName !== "") {
          console.log(
            "for filtering the country names... props.countryName: ",
            props.countryName
          );
          let filteredCountryData = countryData.filter((data) =>
            data.name.common
              .toLowerCase()
              .includes(props.countryName.toLowerCase())
          );
          console.log("setting state countryData to filteredCountryData");
          setCountryData(filteredCountryData);
        } else {
          console.log("setting state countryData to countryData");
          setCountryData([...data]);
        }
      } catch (error) {
        console.log("There is error: ", error);
      }
    };
    getCountryInfo(props.region);
  }, [props.region, props.countryName]);

  return (
    <>
      {countryData.length > 0 ? (
        <div
          className={
            contextDisplayMode == "dark-mode"
              ? "flags-container"
              : "flags-container light"
          }
        >
          {countryData.map((data) => {
            return (
              <CountryCard
                key={countryData.indexOf(data)}
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
