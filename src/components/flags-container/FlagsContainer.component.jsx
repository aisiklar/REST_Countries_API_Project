import CountryCard from "../country-card/CountryCard.component";
import { useEffect, useState } from "react";
import "./flags-container.styles.scss";

const FlagsContainer = () => {
  const [data, setData] = useState([]);
  console.log("data: ", data);

  useEffect(() => {
    const getCountryInfo = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data[0].flags.svg);
        console.log(data[0]);
        console.log(data[0].name.common);
        console.log(data[0].population);
        console.log(data[0].region);
        console.log(data[0].capital[0]);
        setData([...data]);
      } catch (error) {
        console.log("There is error: ", error);
      }
    };
    getCountryInfo();
  }, []);

  // for test
  if (data.length > 0) {
    data.map((data) => {
      data.capital
        ? console.log(data.capital[0])
        : console.log("no capital");
    });
    console.log(`data length: ${data.length}`);
  }

  return (
    <>
      {data.length > 0 ? (
        <div className="flags-container">
          {data.map((data) => {
            return (
              <CountryCard
                flag={data.flags.svg}
                name={data.name.common}
                population={data.population}
                region={data.region}
                capital={data.capital ? data.capital[0]: '-'}
              ></CountryCard>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default FlagsContainer;
