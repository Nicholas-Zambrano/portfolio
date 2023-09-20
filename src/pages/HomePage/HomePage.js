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
  return (
    <section className="homePage">
      <div className="homePage__headerContainer">
        <div className="homePage__headerWrapper">
          <div className="homePage__header">
            <img className="homePage__me" src={me} alt="face of me" />

            {/* <DropdownMenu /> */}
          </div>
        </div>
        <p className="homePage__name">
          {/* Hello I'm Nicholas Zambrano, welcome to my portfolio. */}
          Nicholas Zambrano
        </p>
        <DropdownMenu />
      </div>

      <article className="homePage__context">
        {/* <p className="homePage__name"> */}
        {/* Hello I'm Nicholas Zambrano, welcome to my portfolio. */}
        {/* Nicholas Zambrano
        </p> */}

        <p className="homePage__intro">
          I am passionate expoloring several programming langauges and
          fascinated seeing lines of code becoming a tangible product.
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
                alt="Python"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link to="/c">
              <img
                className="homePage__skillImage homePage__cImage"
                src={c}
                alt="C language"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link to="/java">
              <img
                className="homePage__skillImage homePage__javaImage"
                src={java}
                alt="JAVA language"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link to="/javaScript">
              <img
                className="homePage__skillImage homePage__jsImage"
                src={javaScript}
                alt="javascript"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link to="/html-css-websites">
              <img
                className="homePage__skillImage  homePage__htmlImage"
                src={html}
                alt="html"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link to="/html-css-websites">
              <img
                className="homePage__skillImage homePage__cssImage"
                src={css}
                alt="CSS language"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link to="/html-css-websites">
              <img
                className="homePage__skillImage homePage__scssImage"
                src={scssLogo}
                alt="SCSS language"
              />
            </Link>
          </article>
          <article className="homePage__eachSkill">
            <Link to="/full-stack">
              <img
                className="homePage__skillImage homePage__mysqlImage "
                src={mysql}
                alt="MYSQL language"
              />
            </Link>
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
              alt="LinkedIn page for myself"
            />
          </Link>
        </div>
      </footer>
    </section>
  );
}

export default HomePage;
