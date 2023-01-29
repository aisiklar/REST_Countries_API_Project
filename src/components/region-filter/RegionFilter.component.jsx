import { NoEncryption } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { useEffect } from "react";
import { useContext, useState } from "react";
import Select from "react-select";
import { DisplayModeContext } from "../../DisplayModeContext";
import "./region-filter-container.styles.scss";

const RegionFilter = (props) => {
  console.log("regionFilter comp. rendered....");

  console.log("props.defaultValue: ", props.defaultValue);

  const contextDisplayMode = useContext(DisplayModeContext);
  console.log("Region Filter comp. contextDisplayMode: ", contextDisplayMode);
  console.log("default Value for react select: ", props.defaultValue);

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
    placeholder: (base) => ({
      ...base,
      fontSize: '1.4rem',
      fontWeight: 400,
      color:contextDisplayMode == "dark-mode"
      ? "var(--color-darkmode)"
      : "var(--color-lightmode)",
      "@media only screen and (max-width: 500px)": {
        ...base['@media only screen and (max-width: 500px'],
        fontSize: '1.2rem',
      }
    }),
    control: (base) => {
      //console.log("react-select control base: ", base);
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
      //console.log("react-select option base:", base);
      /* console.log(
        "react-select option:",
        data,
        isDisabled,
        isFocused,
        isSelected
      ); */
      return {
        ...base,
        fontSize: "1.4rem",
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
      //console.log("react-select singleValue data: ", data);
      return {
        ...base,
        fontSize: "1.4rem",
        color:
          contextDisplayMode == "dark-mode"
            ? "var(--color-darkmode)"
            : "var(--color-lightmode)",
      };
    },
    Menu: (props) => {
      //console.log("React-select Menu props: ", props);
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
          defaultValue={
            props.defaultValue == "Africa"
              ? options[0]
              : props.defaultValue == "America"
              ? options[1]
              : props.defaultValue == "Asia"
              ? options[2]
              : props.defaultValue == "Europe"
              ? options[3]
              : props.defaultValue == "Oceanşa"
              ? options[4]
              : null
          }
          placeholder={"Filter by Region"}
          isClearable="true"
          onChange={onChangeHandler}
        ></Select>
      </div>
    </>
  );
};

export default RegionFilter;
