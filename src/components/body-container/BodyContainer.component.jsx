import FlagsContainer from "../flags-container/FlagsContainer.component";
import RegionFilter from "../region-filter/RegionFilter.component";
import SearchInput from "../search-input/SearchInput.component";

const BodyContainer = () => {

    return(
        <>
        <div>
            <SearchInput></SearchInput>
            <RegionFilter></RegionFilter>
        </div>
        <div>
            <FlagsContainer></FlagsContainer>
        </div>
        </>
    )
}

export default BodyContainer;