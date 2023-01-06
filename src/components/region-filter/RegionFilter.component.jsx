import { useContext } from "react";
import Select from "react-select";
import { DisplayModeContext } from "../../DisplayModeContext";
import "./region-filter-container.styles.scss";

const RegionFilter = (props) => {
  const contextDisplayMode = useContext(DisplayModeContext);
  console.log("Region Filter comp. contextDisplayMode: ", contextDisplayMode);

  const onChangeHandler = (event) => {
    console.log("region filter selected");
    console.log("selected: ", event);
    if (event !== null) {
      props.selectFilter(event.value);
    } else if (event == null) {
      props.selectFilter("all");
    }
  };

  const options = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  let styleBgColor = "var(--background-color-dark-header)";
  let styleBorder = "0.1px solid var(--background-color-dark-header)";
  let styleBoxShadow = "var(--background-color-dark-header)";
  let styleSingleColor = "var(--color-darkmode-input)";

  if (contextDisplayMode == "light-mode") {
    styleBgColor = "var(--background-color-light-header)";
    styleBorder = "0.1px solid var(--background-color-light-header)";
    styleBoxShadow = "var(--background-color-light-header)";
    styleSingleColor = "var(--light-mode-input:)";
  }

  return (
    <>
      <div className="region-filter-container">
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: { styleBgColor },
              border: { styleBorder },
              boxShadow: { styleBoxShadow },
            }),
            singleValue: (baseStyles) => ({
              ...baseStyles,
              color: { styleSingleColor },
            }),
          }}
          options={options}
          placeholder={"Filter by Region"}
          isClearable="true"
          onChange={onChangeHandler}
        ></Select>
      </div>
    </>
  );
};

export default RegionFilter;
