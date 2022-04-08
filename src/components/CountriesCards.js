/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Styles } from "../styles/countriesCards";

export default function CountriesCards({ countriesData }) {
  return (
    <Styles>
      <div className="cards-content">
        {countriesData
          ? countriesData.map(
              ({ flags, name, population, region, capital }, index) => {
                return (
                  <div key={index} className="country-card">
                    <img
                      className="card-img"
                      src={flags.png}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
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
                );
              }
            )
          : "Loading..."}
      </div>
    </Styles>
  );
}
