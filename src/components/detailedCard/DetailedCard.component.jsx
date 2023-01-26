import {
  CurrencyYenTwoTone,
  Language,
  PropaneSharp,
} from "@mui/icons-material";
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
    ? countryDetails[0].population
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
  let currencies = countryDetails[0].currencies;
  console.log("currencies: ", currencies);
  console.log("currency keys: ", Object.keys(currencies));
  let currencyKeys = Object.keys(currencies);
  // if there are more than one currency
  if (currencyKeys.length > 1) {
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
  console.log("countryDetails[0].borders: ", countryDetails[0].borders);
  // borders api give the abbreviation of the country ("cca3" parameter in the API)

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
            sx={{ fontSize: 20, color: arrowColor }}
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
                  {currencyKeys.length > 1
                    ? currencyKeysBeforeLast.map(
                        (eachCurrency) => currencies[eachCurrency].name + ", "
                      ) + currencies[currencyKeysLast[0]].name
                    : currencies[currencyKeys[0]].name}
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
              <p>Border Countries: </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedCard;
