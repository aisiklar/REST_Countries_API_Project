import CountryCard from "../country-card/CountryCard.component";
import { useEffect, useState } from "react";

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

  return (
    <>
      {data.length > 0 ? (
        <CountryCard
          flag={data[0].flags.svg}
          name={data[0].name.common}
          population={data[0].population}
          region={data[0].region}
          capital={data[0].capital[0]}
        ></CountryCard>
      ) : null}
    </>
  );
};

export default FlagsContainer;
