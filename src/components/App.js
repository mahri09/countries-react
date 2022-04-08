import React, { useState, useEffect } from "react";
import CountriesCards from "./CountriesCards";
import Header from "./Header";
import SearchBar from "./SearchBar";
import countries from "../data/countriesAll.json";
import Global from "../styles/global";

function App() {
  const [countriesData, setCountriesData] = useState(countries);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountriesBySearch, setFilteredCountriesBySearch] = useState(
    []
  );
  const [selectOption, setSelectOption] = useState("");

  useEffect(() => {
    let filteredCountries = countriesData.filter((country) => {
      return (
        country.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 ||
        country.region.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      );
    });
    setFilteredCountriesBySearch(filteredCountries);
  }, [searchQuery]);

  useEffect(() => {
    let filteredCountries = countriesData.filter((country) => {
      return country.region.toLowerCase().indexOf(selectOption) !== -1;
    });
    setFilteredCountriesBySearch(filteredCountries);
  }, [selectOption]);

  return (
    <Global>
      <Header />
      <SearchBar
        setSearchQuery={setSearchQuery}
        setSelectOption={setSelectOption}
      />
      <CountriesCards countriesData={filteredCountriesBySearch} />
    </Global>
  );
}

export default App;
