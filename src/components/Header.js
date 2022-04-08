import React from "react";
import { Styles } from "../styles/header";

const Header = () => {
  return (
    <Styles>
      <div className="header">
        <h1>Where in the world?</h1>
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/512/157/157089.png"
            alt="moon-icon, dark-mode-image"
          />
          <span>Dark Mode</span>
        </button>
      </div>
    </Styles>
  );
};

export default Header;
