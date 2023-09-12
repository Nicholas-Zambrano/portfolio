import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

function HomePage() {
  const [displayDropdown, setDisplayDropDown] = useState(false);

  const dropdownMenu = () => {
    return (
      <div className="homePage__dropdown">
        <Link className="homePage__linnk" to="/About">
          <p>About</p>
        </Link>
        <Link className="homePage__linnk" to="/Projects">
          <p>Projects</p>
        </Link>
        <Link className="homePage__linnk">
          <p>Contact </p>
        </Link>
      </div>
    );
  };

  const handleSubmit = () => {
    /* if the button to display is already true it has already been clicked, 
    and if clicked again put it to false
    */
    if (displayDropdown) {
      setDisplayDropDown(false);
    }
    // if it has not yet been clicked then update state to true
    else {
      setDisplayDropDown(true);
    }
  };

  return (
    <section className="homePage">
      <div className="homePage__header">
        <h1 className="homePage__title"> NZ</h1>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="homePage__headerButton"
          >
            Menu
          </button>
          {displayDropdown && dropdownMenu()}
        </div>
      </div>

      <article className="homePage__context">
        <p className="homePage__name">
          Hello I'm Nicholas Zambrano, welcome to my portfolio.
        </p>

        <p className="homePage__intro">
          I am passionate expoloring several programming langauges and
          fascinated seing lines of code becoming a tangible product.
        </p>
      </article>

      <footer></footer>
    </section>
  );
}

export default HomePage;
