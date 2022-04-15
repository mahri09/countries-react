import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import CountriesCards from "./CountriesCards";
import CountryDetails from "./CountryDetails";
import Header from "./Header";
import Global from "../styles/global";
import { darkTheme, lightTheme } from "../styles/elements/elements";
import countries from "../data/countriesAll.json";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Global>
        <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
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
    </ThemeProvider>
  );
}

export default App;
