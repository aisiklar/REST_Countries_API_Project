import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { DisplayModeContext } from "../../DisplayModeContext";
import "./searchInput.styles.scss";

const SearchInput = () => {
  const contextDisplayMode = useContext(DisplayModeContext);

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
        <input placeholder="Search by Country name"></input>
      </div>
    </>
  );
};

export default SearchInput;
