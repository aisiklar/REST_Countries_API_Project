import { PropaneSharp } from "@mui/icons-material";
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
          <div className="detailed-flag-container">flag</div>
          <div className="detailed-country-details-container">
            <div className="detailed-country-name-container">
              {" "}
              country name{" "}
            </div>
            <div className="detailed-country-details-columns-container">
              <div className="detailed-column1"> country details column1</div>
              <div className="detailed-column2"> country details column2</div>
            </div>
            <div className="detailed-country-border-countries-container">
              {" "}
              border countries
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedCard;
