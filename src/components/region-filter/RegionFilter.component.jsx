import { useContext } from "react";
import Select from "react-select";
import { DisplayModeContext } from "../../context";
import "./region-filter-container.styles.scss";

const RegionFilter = (props) => {
  const contextDisplayMode = useContext(DisplayModeContext);

  const onChangeHandler = (event) => {
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

  const selectStyles = {
    placeholder: (base) => ({
      ...base,
      fontSize: "1.4rem",
      fontWeight: 400,
      color:
        contextDisplayMode == "dark-mode"
          ? "var(--color-darkmode)"
          : "var(--color-lightmode)",
      "@media only screen and (max-width: 500px)": {
        ...base["@media only screen and (max-width: 500px"],
        fontSize: "1.2rem",
      },
    }),
    control: (base) => {
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
      return {
        ...base,
        backgroundColor: "red",
      };
    },
  };

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
