import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useContext } from "react";
import { DisplayModeContext } from "../../DisplayModeContext";
import "./detailed-card.styles.scss";

const DetailedCard = (props) => {
  const contextDisplayMode = useContext(DisplayModeContext);

  console.log(
    "props.detailedSelectedCardInfo: ",
    props.detailedSelectedCardInfo
  );

  let countryDetails = props.detailedSelectedCardInfo;
  let allCountries = props.allCountryData;

  console.log("all countries: ", allCountries);

  /*  if (countryDetails[0].name.nativeName.common) {
    console.log("if....", countryDetails[0].nativeName.common);
  } else {
    console.log("no if");
  }
 */

  //get keys of native names
  let nativeKeys = countryDetails[0].name.nativeName
    ? Object.keys(countryDetails[0].name.nativeName)
    : null;
  console.log("nativeKeys: ", nativeKeys);
  let selectedNativeKey = nativeKeys ? nativeKeys[0] : null;
  console.log("selectedNativeKey: ", selectedNativeKey);

  // assign variables for country details
  let tld = countryDetails[0].tld ? countryDetails[0].tld[0] : "-";
  let flag = countryDetails[0].flags.svg;
  let name = countryDetails[0].name.common
    ? countryDetails[0].name.common
    : "-";
  let population = countryDetails[0].population
    ? countryDetails[0].population.toLocaleString('en-US')
    : "-";
  let region = countryDetails[0].region ? countryDetails[0].region : "-";
  let subRegion = countryDetails[0].subregion
    ? countryDetails[0].subregion
    : "-";
  let capital = countryDetails[0].capital ? countryDetails[0].capital[0] : "-";
  let nativeName = countryDetails[0].name.nativeName
    ? countryDetails[0].name.nativeName[selectedNativeKey].common
    : "-";
  let currencyKeysBeforeLast = [];
  let currencyKeysLast = [];
  let currencies = countryDetails[0].currencies
    ? countryDetails[0].currencies
    : null;
  let currencyKeys = currencies != null ? Object.keys(currencies) : null;
  if (currencies !== null) {
    console.log("currency keys: ", Object.keys(currencies));
  }
  let oneCurrency =
    currencies !== null ? currencies[currencyKeys[0]].name : "-";
  console.log("currencies: ", currencies);

  let moreThanOneCurrency = false;
  // if there are more than one currency
  if (currencies !== null && currencyKeys.length > 1) {
    moreThanOneCurrency = true;
    currencyKeysBeforeLast = currencyKeys.slice(0, currencyKeys.length - 1);
    currencyKeysLast = currencyKeys.slice(-1);
    //console.log("currencyKeysBeforeLast: ", currencyKeysBeforeLast);
    //console.log("currencyKeysLast[0]: ", currencyKeysLast[0]);
    /* console.log(
      "currencies[currencyKeysLast[0]].name: ",
      currencies[currencyKeysLast[0]].name
    ); */
  }
  let languages = countryDetails[0].languages;
  let languageKeys = Object.keys(languages);
  //console.log("languages: ", languages);
  //console.log("languageKeys: ", languageKeys);
  let languageKeysBeforeLast = [];
  let languageKeysLast = [];
  // if there are more than one language spoken
  if (languageKeys.length > 1) {
    //console.log("languageKeys.length > 1...");
    for (let i = 0; i < languageKeys.length; i++) {
      //console.log(`language ${i} :  ${languages[languageKeys[i]].name}`);
    }
    languageKeysBeforeLast = languageKeys.slice(0, languageKeys.length - 1);
    languageKeysLast = languageKeys.slice(-1);
  }

  // borders
  // for those countries where "borders" are defined
  let borderCountries = [];
  if (countryDetails[0].borders) {
    console.log("countryDetails[0].borders: ", countryDetails[0].borders);
    for (let eachBorder of countryDetails[0].borders) {
      console.log(
        "eachBorder: ",
        eachBorder,
        ", index: ",
        countryDetails[0].borders.indexOf(eachBorder)
      );
      let borderCountry = allCountries.filter((country) => {
        return country.cca3.toLowerCase() == eachBorder.toLowerCase();
      });
      console.log("borderCountry: ", borderCountry);
      console.log(
        "borderCountry[0].name.common: ",
        borderCountry[0].name.common
      );
      borderCountries.push(borderCountry[0].name.common);

      let testCountry = allCountries.filter(
        (aCountry) =>
          aCountry.cca3.toLowerCase() == countryDetails[0].borders[0]
      );
      console.log(
        "countryDetails[0].borders[0]: ",
        countryDetails[0].borders[0]
      );
      console.log("test Country: ", testCountry);
    }
  } else {
    console.log("countryDetails[0].borders, not DEFINED!!!");
  }
  // borders api give the abbreviation of the country ("cca3" parameter in the API)

  console.log("borderCountries: ", borderCountries);

  console.log("flag: ", flag);

  const arrowColor =
    contextDisplayMode == "dark-mode"
      ? "var(--color-darkmode)"
      : "var(--color-lightmode)";

  const pressBackButton = (e) => {
    console.log("Back Button pressed");
    props.submitBackButton(e);
  };

  return (
    <>
      <div
        className={
          contextDisplayMode == "dark-mode"
            ? "detailed-card-container"
            : "detailed-card-container light"
        }
      >
        <div
          className={
            contextDisplayMode == "dark-mode"
              ? "back-button-container"
              : "back-button-container light"
          }
          onClick={pressBackButton}
        >
          <KeyboardBackspaceIcon
            sx={{ fontSize: 23, color: arrowColor }}
          ></KeyboardBackspaceIcon>
          <p className="back-button-text">Back</p>
        </div>
        <div className="detailed-country-data-container">
          <div className="detailed-flag-container">
            <img src={flag} alt="flag"></img>
          </div>
          <div className="detailed-country-details-container">
            <div className="detailed-country-name-container">
              <p>{name}</p>
            </div>
            <div className="detailed-country-details-columns-container">
              <div className="detailed-column1">
                <p>Native Name: {nativeName}</p>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Sub Region: {subRegion}</p>
                <p>Capital: {capital}</p>
              </div>
              <div className="detailed-column2">
                <p>Top Level Domain: {tld} </p>
                <p>
                  Currencies:{" "}
                  {moreThanOneCurrency
                    ? currencyKeysBeforeLast.map(
                        (eachCurrency) => currencies[eachCurrency].name + ", "
                      ) + currencies[currencyKeysLast[0]].name
                    : oneCurrency}
                </p>
                <p>
                  Languages:{" "}
                  {languageKeys.length > 1
                    ? languageKeysBeforeLast.map(
                        (eachLanguage) => languages[eachLanguage] + ", "
                      ) + languages[languageKeysLast[0]]
                    : languages[languageKeys[0]]}
                </p>
              </div>
            </div>
            <div className="detailed-country-border-countries-container">
              {" "}
              <div className="border-container">
                <h3>Border Countries:</h3>
                <div className='each-border-container'>
                {borderCountries.length > 0
                  ? borderCountries.map((eachBorder) => (
                      <p
                        className={
                          contextDisplayMode == "dark-mode"
                            ? "each-border"
                            : "each-border-light"
                        }
                        key={borderCountries.indexOf(eachBorder)}
                      >
                        {eachBorder}
                      </p>
                    ))
                  : "-"}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedCard;
