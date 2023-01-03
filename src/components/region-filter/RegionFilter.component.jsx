import Select from "react-select";
import "./region-filter-container.styles.scss";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const filterStyles = {
  control: (styles) => ({
    backgroundColor: "var(--background-color-dark-header)",
  }),
};

const RegionFilter = () => {
  return (
    <>
      <div className="region-filter-container">
        <Select
          styles={filterStyles}
          options={options}
          placeholder={"Filter by Region"}
          isClearable="true"
        ></Select>
      </div>
    </>
  );
};

export default RegionFilter;
