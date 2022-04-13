/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Styles } from "../styles/countriesCards";
import { Link } from "react-router-dom";

export default function CountriesCards({ handleCountriesData }) {
  const [countriesData, setCountriesData] = useState(handleCountriesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountriesBySearch, setFilteredCountriesBySearch] = useState(
    []
  );
  const [selectOption, setSelectOption] = useState("");

  useEffect(() => {
    console.log(countriesData);
    let filteredCountries = countriesData.filter((country) => {
      return (
        country.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        // country.capital.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
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
    <Styles>
      <div className="main-content">
        <SearchBar
          setSearchQuery={setSearchQuery}
          setSelectOption={setSelectOption}
        />

        <div className="cards-content">
          {filteredCountriesBySearch
            ? filteredCountriesBySearch.map(
                ({ flags, name, population, region, capital }, index) => {
                  return (
                    <Link to={`/details/${name}`} key={index}>
                      <div className="country-card">
                        <img
                          className="card-img"
                          src={flags.png}
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h3 className="card-title">{name}</h3>
                          <div className="card-info">
                            <p>
                              Population:
                              <span>{population}</span>
                            </p>
                            <p>
                              Region:
                              <span>{region}</span>
                            </p>
                            <p>
                              Capital:
                              <span>{capital}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                }
              )
            : "Loading..."}
        </div>
      </div>
    </Styles>
  );
}
