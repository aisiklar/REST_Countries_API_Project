import "./country-card.styles.scss";

const CountryCard = () => {
  return (
    <>
      <div className="country-card-container">
        <div className="flag-container">flag image</div>
        <div>
          <p className="country-name">name</p>
          <div>
            <p> population: pop</p>
            <p> Region: Reg</p>
            <p> Capial: Cap</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
