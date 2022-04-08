import React from "react";
import Styles from "../styles/searchBar";

const SearchBar = ({ setSearchQuery, setSelectOption }) => {
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSelectOption = (e) => {
    setSelectOption(e.target.value);
  };
  return (
    <Styles>
      <div className="search-bar">
        <form className="search-form">
          <input
            type="search"
            onChange={handleSearchQuery}
            placeholder="Search..."
          />
        </form>
        <select
          onChange={handleSelectOption}
          type="option"
          name="regions"
          id="country"
        >
          <option value="">Filter by Region</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="oceania">Oceania</option>
          <option value="polar">Polar</option>
          <option value="antarctic ocean">Antarctic Ocean</option>
        </select>
      </div>
    </Styles>
  );
};

export default SearchBar;
