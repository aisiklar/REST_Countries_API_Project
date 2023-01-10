import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { DisplayModeContext } from "../../DisplayModeContext";
import "./searchInput.styles.scss";

const SearchInput = (props) => {
  const contextDisplayMode = useContext(DisplayModeContext);

  const onChangeHandler = (event) => {
    console.log("text in the input field: ", event.target.value);
    props.getCountryName(event.target.value);
  };

  const onSubmitHandler = (event) => {
    if (event.charCode == 13) {
      console.log("enter key pressed: ", event.target.value);
      props.getSubmittedName(event.target.value);
    }
  };

  return (
    <>
      <div
        className={
          contextDisplayMode == "dark-mode"
            ? "search-input-wrapper"
            : "search-input-wrapper light"
        }
      >
        <SearchIcon
          className={
            contextDisplayMode == "dark-mode"
              ? "search-icon"
              : "search-icon light"
          }
        ></SearchIcon>
        <input
          placeholder="Search by Country name"
          onChange={onChangeHandler}
          onKeyPress={onSubmitHandler}
        ></input>
      </div>
    </>
  );
};

export default SearchInput;
