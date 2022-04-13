import React from "react";
import { Routes, Route } from "react-router-dom";
import CountriesCards from "./CountriesCards";
import CountryDetails from "./CountryDetails";
import Header from "./Header";
import Global from "../styles/global";
import countries from "../data/countriesAll.json";

function App() {
  return (
    <Global>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<CountriesCards handleCountriesData={countries} />}
        />
        <Route
          exact
          path="/details/:name"
          element={<CountryDetails countriesData={countries} />}
        />
      </Routes>
    </Global>
  );
}

export default App;
