import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import FavoritesNavbar from "./FavoritesNavbar";
import HeaderApp from "./HeaderApp";
import SearchNav from "./SearchNav";
import PropTypes from "prop-types";

const Navbar = ({ bookmark }) => {
  let searchRef = useRef();
  const navigate = useNavigate();

  function handleSearch() {
    const refSearch = searchRef.current.value;
    searchRef.current.value = "";
    navigate(`/search/${refSearch}`);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <header>
      <HeaderApp />
      <SearchNav
        searchRef={searchRef}
        handleKeyDown={handleKeyDown}
        handleSearch={handleSearch}
      />

      <FavoritesNavbar bookmark={bookmark} />
    </header>
  );
};

Navbar.protoType = {
  bookmark: PropTypes.object.isRequired,
};

export default Navbar;
