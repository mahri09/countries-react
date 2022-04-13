import React from "react";
import { Link, useParams } from "react-router-dom";
import { Styles } from "../styles/countriesDetails";

export default function CountryDetails({ countriesData }) {
  let { name } = useParams();
  let clickedCountry = countriesData.find((country) => country.name === name);
  console.log(clickedCountry);
  return (
    <Styles>
      <div className="cards-details">
        <Link to={"/"}>
          <button className="back-button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/507/507257.png"
              alt="icon"
            />
            Back
          </button>
        </Link>
        <div className="content">
          <img
            className="card-img"
            src={clickedCountry.flags.png}
            alt="Card image cap"
          />
          <div className="card-body">
            <div className="card-info">
              <h3 className="card-title">{clickedCountry.name}</h3>
              <p>
                Native Name:
                <span>{clickedCountry.nativeName}</span>
              </p>
              <p>
                Population:
                <span>{clickedCountry.population}</span>
              </p>
              <p>
                Region:
                <span>{clickedCountry.region}</span>
              </p>
              <p>
                Sub Region:
                <span>{clickedCountry.subregion}</span>
              </p>
            </div>
            <div className="card-info">
              <p>
                Top Level Domain:
                <span>{clickedCountry.topLevelDomain[0]}</span>
              </p>
              <p>
                Currencies:
                <span>{clickedCountry.currencies[0].name}</span>{" "}
                <span>({clickedCountry.currencies[0].symbol})</span>
              </p>
              <p>
                Languages:
                {clickedCountry.languages.map((language) => (
                  <span>{language.name},</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
}
