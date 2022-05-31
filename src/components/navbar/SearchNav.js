import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";

const SearchNav = ({ searchRef, handleKeyDown, handleSearch }) => {
  return (
    <div className="bg-slate-800 opacity-70 px-5 py-3 flex items-center justify-center shadow-black shadow-sm">
      <input
        type="text"
        ref={searchRef}
        placeholder="El tiempo en..."
        className="w-1/2 rounded-full text-black font-semibold py-2 px-5 text-lg shadow-sm shadow-black"
        onKeyDown={handleKeyDown}
      />
      <button type="submit" onClick={handleSearch} className="pl-2 text-xl">
        <FaSearch className="text-white text-2xl" />
      </button>
    </div>
  );
};

SearchNav.propTypes = {
  searchRef: PropTypes.object.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchNav;
