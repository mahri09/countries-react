import React, { useState, useEffect } from "react";
import CountriesCards from "./CountriesCards";
import Header from "./Header";
import SearchBar from "./SearchBar";
import countries from "../data/countriesAll.json";
import Global from "../styles/global";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    setCountriesData(countries);
  }, []);

  return (
    <Global>
      <Header />
      <SearchBar />
      <CountriesCards countriesData={countriesData} />
    </Global>
  );
}

export default App;
