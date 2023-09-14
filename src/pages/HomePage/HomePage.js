import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

import python from "../../assets/images/python-logo.png";
import html from "../../assets/images/html-logo.png";
import css from "../../assets/images/css-logo.png";
import scssLogo from "../../assets/images/scss-logo.png";
import javaScript from "../../assets/images/javaScript-logo.png";
import mysql from "../../assets/images/mysql-logo.png";
import github from "../../assets/images/github.png";
import linkledin from "../../assets/images/linkledin.png";
import me from "../../assets/images/me.jpg";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import java from "../../assets/images/java2.png";
import c from "../../assets/images/c.png";

function HomePage() {
  // const [displayDropdown, setDisplayDropDown] = useState(false);

  // const dropdownMenu = () => {
  //   return (
  //     <div className="homePage__dropdown">
  //       <Link className="homePage__link" to="/About">
  //         <p className="homePage__linkContent">About</p>
  //       </Link>
  //       <Link className="homePage__link" to="/Projects">
  //         <p className="homePage__linkContent">Projects</p>
  //       </Link>
  //       <Link className="homePage__link">
  //         <p className="homePage__linkContent">Contact </p>
  //       </Link>
  //     </div>
  //   );
  // };

  // const handleSubmit = () => {
  //   /* if the button to display is already true it has already been clicked, 
  //   and if clicked again put it to false
  //   */
  //   if (displayDropdown) {
  //     setDisplayDropDown(false);
  //   }
  //   // if it has not yet been clicked then update state to true
  //   else {
  //     setDisplayDropDown(true);
  //   }
  // };

  return (
    <section className="homePage">
      <div className="homePage__headerWrapper">
      <div className="homePage__header">
        <img className="homePage__me" src={me} alt="face picture" />

        <DropdownMenu />
        </div>
      </div>

      <article className="homePage__context">
        <p className="homePage__name">
          {/* Hello I'm Nicholas Zambrano, welcome to my portfolio. */}
          Nicholas Zambrano
        </p>

        <p className="homePage__intro">
          I am passionate expoloring several programming langauges and
          fascinated seing lines of code becoming a tangible product.
        </p>
      </article>
      <section className="homePage__skills">
        <h2 className="homePage__skillsSubheader">Skills</h2>

        <section className="homePage__skillWrapper">
          <article className="homePage__eachSkill">
            <Link to="/python">
              <img
                className="homePage__skillImage homePage__pythonImage"
                src={python}
                alt="python"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link to="/c">
              <img
                className="homePage__skillImage homePage__cImage"
                src={c}
                alt="c"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link>
              <img
                className="homePage__skillImage homePage__javaImage"
                src={java}
                alt="java"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link>
              <img
                className="homePage__skillImage homePage__jsImage"
                src={javaScript}
                alt="javascript"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link>
              <img
                className="homePage__skillImage  homePage__htmlImage"
                src={html}
                alt="html"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link>
              <img
                className="homePage__skillImage homePage__cssImage"
                src={css}
                alt="css"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link>
              <img
                className="homePage__skillImage homePage__scssImage"
                src={scssLogo}
                alt="scss"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <img
              className="homePage__skillImage homePage__mysqlImage "
              src={mysql}
              alt="mysql"
            />
          </article>
        </section>
      </section>

      <footer>
        <div className="homePage__footerWrapper">
          <Link to="https://github.com/Nicholas-Zambrano">
            <img className="homePage__github" src={github} alt="github" />
          </Link>

          <Link to="https://www.linkedin.com/in/nicholas-zambrano1">
            <img
              className="homePage__linkledin"
              src={linkledin}
              alt="linkledin"
            />
          </Link>
        </div>
      </footer>
    </section>
  );
}

export default HomePage;
