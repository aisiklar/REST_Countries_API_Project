import SearchIcon from "@mui/icons-material/Search";
import "./searchInput.styles.scss";

const SearchInput = () => {
  return (
    <>
      <div className="search-input-container">
        <SearchIcon className="search-icon"></SearchIcon>
        <input placeholder="Search by Country name"></input>
      </div>
    </>
  );
};

export default SearchInput;
