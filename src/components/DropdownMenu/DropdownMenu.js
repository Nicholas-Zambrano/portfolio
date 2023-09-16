import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [displayDropdown, setDisplayDropDown] = useState(false);

  const dropdownMenu = () => {
    return (
      <div className="homePage__dropdown">
        <Link className="homePage__link" to="/">
          <p className="homePage__linkContent">Home Page</p>
        </Link>
        <Link className="homePage__link" to="/About">
          <p className="homePage__linkContent">About</p>
        </Link>
        <Link className="homePage__link" to="/Projects">
          <p className="homePage__linkContent">Projects</p>
        </Link>
        <Link className="homePage__link" to="/contact-me">
          <p className="homePage__linkContent">Contact</p>
        </Link>
      </div>
    );
  };

  const handleSubmit = () => {
    if (displayDropdown) {
      setDisplayDropDown(false);
    } else {
      setDisplayDropDown(true);
    }
  };

  return (
    <div className="homePage__headerButtonWrapper">
      <button
        type="submit"
        onClick={handleSubmit}
        className="homePage__headerButton"
      >
        Menu
      </button>
      {displayDropdown && dropdownMenu()}
    </div>
  );
}

export default DropdownMenu;
