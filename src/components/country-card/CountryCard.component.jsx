import "./country-card.styles.scss";

const CountryCard = (props) => {
  let name = props.name;
  let population = props.population;
  let region = props.region;
  let capital = props.capital;
  let image = props.flag;
  
  return (
    <>
      <div className="country-card-container">
        <div className="flag-container">
          <img src={image}></img>
          <p className="country-name">{name}</p>
          <div>
            <p> population: {population}</p>
            <p> Region: {region}</p>
            <p> Capital: {capital}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
