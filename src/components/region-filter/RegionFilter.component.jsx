import Select from "react-select";
import "./region-filter-container.styles.scss";

const RegionFilter = (props) => {
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

  return (
    <>
      <div className="region-filter-container">
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: "var(--background-color-dark-header)",
              border: "0.1px solid var(--background-color-dark-header)",
              boxShadow: "var(--background-color-dark-header)",
            }),
            singleValue: (baseStyles) => ({
              ...baseStyles,
              color: "var(--color-darkmode-input)",
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
