import { useContext } from "react";
import { DisplayModeContext } from "../../context";
import "./country-card.styles.scss";

const CountryCard = (props) => {
  let name = props.name;
  let population = props.population.toLocaleString("en-US");
  let region = props.region;
  let capital = props.capital;
  let image = props.flag;

  const contextDisplayMode = useContext(DisplayModeContext);

  return (
    <>
      <div
        className={
          contextDisplayMode == "dark-mode"
            ? "country-card-container"
            : "country-card-container light"
        }
      >
        <div className="flag-container">
          <img src={image}></img>
          <p className="country-name">{name}</p>
          <p>
            {" "}
            <span>Population: </span> {population}
          </p>
          <p>
            {" "}
            <span>Region: </span>
            {region}
          </p>
          <p>
            {" "}
            <span>Capital: </span> {capital}
          </p>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
