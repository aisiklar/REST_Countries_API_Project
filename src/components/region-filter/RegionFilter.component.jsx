import { NoEncryption } from "@mui/icons-material";
import { red } from "@mui/material/colors";
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

  const selectStyles = {
    control: (base) => {
      console.log("react-select control base: ", base);
      return {
        ...base,
        color:
          contextDisplayMode == "dark-mode"
            ? "var(--color-darkmode)"
            : "var(--color-lightmode)",
        backgroundColor:
          contextDisplayMode == "dark-mode"
            ? "var(--background-color-dark-header)"
            : "var(--background-color-lightmode-header)",
      };
    },
    option: (base, { data, isDisabled, isFocused, isSelected }) => {
      console.log("react-select option base:", base);
      console.log(
        "react-select option:",
        data,
        isDisabled,
        isFocused,
        isSelected
      );
      return {
        ...base,
        color:
          contextDisplayMode == "dark-mode"
            ? "var(--color-darkmode)"
            : "var(--color-lightmode)",
        backgroundColor:
          contextDisplayMode == "dark-mode"
            ? "var(--background-color-dark-header)"
            : "var(--background-color-lightmode-header)",
      };
    },
    singleValue: (base, { data }) => {
      console.log("react-select singleValue data: ", data);
      return {
        ...base,
        color:
          contextDisplayMode == "dark-mode"
            ? "var(--color-darkmode)"
            : "var(--color-lightmode)",
      };
    },
    Menu: (props) => {
      console.log("React-select Menu props: ", props);
      return {
        ...base,
        backgroundColor: "red",
      };
    },
  };

  if (contextDisplayMode == "light-mode") {
    styleBgColor = "var(--background-color-lightmode-header)";
    styleBorder = "0.1px solid var(--background-color-lightmode-header)";
    styleBoxShadow = "var(--background-color-lightmode-header)";
    //styleSingleColor = "var(--light-mode-input)";
    styleSingleColor = "red";
  }

  /* 
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
 */

  return (
    <>
      <div
        className={
          contextDisplayMode == "dark-mode"
            ? "region-filter-container"
            : "region-filter-container light"
        }
      >
        <Select
          styles={selectStyles}
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
