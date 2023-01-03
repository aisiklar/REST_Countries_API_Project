import CountryCard from "../country-card/CountryCard.component";
import { useEffect, useState } from "react";
import "./flags-container.styles.scss";

const FlagsContainer = (props) => {
  const [countryData, setCountryData] = useState([]);
  //console.log("country data: ", countryData);
  console.log("region props received: ", props.region);

  useEffect(() => {
    const getCountryInfo = async (region) => {
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
        setCountryData([...data]);
      } catch (error) {
        console.log("There is error: ", error);
      }
    };
    getCountryInfo(props.region);
  }, [props.region]);

  return (
    <>
      {countryData.length > 0 ? (
        <div className="flags-container">
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
