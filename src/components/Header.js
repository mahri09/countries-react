import React from "react";
import { Styles } from "../styles/header";

const Header = ({ isDarkTheme, toggleTheme }) => {
  return (
    <Styles>
      <div className="header">
        <h1>Where in the world?</h1>
        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              🌞 Light Mode
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              🌜 Dark Mode
            </span>
          )}
        </button>
      </div>
    </Styles>
  );
};

export default Header;
