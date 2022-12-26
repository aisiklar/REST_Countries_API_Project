import Select from "react-select";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const RegionFilter = () => {
  return (
    <>
      <div>
        <Select
          options={options}
          placeholder={"Filter by Region"}
          isClearable="true"
        ></Select>
      </div>
    </>
  );
};

export default RegionFilter;
