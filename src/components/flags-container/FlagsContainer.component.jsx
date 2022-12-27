import CountryCard from "../country-card/CountryCard.component";

const FlagsContainer = () => {
  const getCountryInfo = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log(data[0]);
    } catch (error) {
      console.log("There is error: ", error);
    }
  };

  getCountryInfo();

  return (
    <>
      <CountryCard></CountryCard>
    </>
  );
};

export default FlagsContainer;
