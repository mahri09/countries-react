import React from "react";
import Styles from "../styles/searchBar";

const SearchBar = () => {
  return (
    <Styles>
      <div className="search-bar">
        <form class="nosubmit">
          <input class="nosubmit" type="search" placeholder="Search..." />
        </form>
        <select type="option" name="regions" id="country">
          <option value="default">Filter by Region</option>
        </select>
      </div>
    </Styles>
  );
};

export default SearchBar;
