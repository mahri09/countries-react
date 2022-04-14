import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Styles } from "../styles/countriesDetails";

export default function CountryDetails({ countriesData }) {
  let { name } = useParams();
  const [findByName, setFindByName] = useState(name);
  const [borderCountries, setBorderCountries] = useState([]);

  let clickedCountry = countriesData.find(
    (country) => country.name === findByName
  );
  useEffect(() => {
    if (clickedCountry.borders) {
      let borders = countriesData.filter((bordersCountry) =>
        clickedCountry.borders.includes(bordersCountry.cioc)
      );
      setBorderCountries(borders);
    }
  }, []);

  const handleClickedBorderCountry = (e) => {
    setFindByName(e.target.outerText.slice(0, -1));
  };
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
                {clickedCountry.languages.map((language, i) => (
                  <span key={i}>{language.name},</span>
                ))}
              </p>
              <p>
                Border Countries:
                {borderCountries &&
                  borderCountries.map((country, i) => (
                    <span
                      className="borders"
                      onClick={handleClickedBorderCountry}
                      key={i}
                    >
                      {country.name},
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
}
