import fireAlarm from "../../assets/images/fire-alarm.png";
import SRPN from "../../assets/images/SRPN.png";
import DOD from "../../assets/images/DOD.png";
import mingleU from "../../assets/images/mingleU.png";
import sudoku from "../../assets/images/sudoku.png";
import inStock from "../../assets/images/inStock.png";
import diceGame from "../../assets/images/diceGame.png";
import spam from "../../assets/images/spam-classification.png";
import brainFlix from "../../assets/images/brainFlix.png";
import bandSite from "../../assets/images/bandSite.png";
import travelSite from "../../assets/images/travelSite.png";
import coffeeShop from "../../assets/images/coffeeShop.png";
import "./ProjectsPage.scss";
import { Link } from "react-router-dom";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

function ProjectsPage() {
  return (
    <div className="projectsPage">
      <div className="projectsPage__headerWrapper">
        <h1 className="projectsPage__title">Projects</h1>
        <DropdownMenu />
      </div>
      <Link className="projectsPage__link">
        <article className="projectsPage__project">
          <div className="projectsPage__projectWrapper">
            <div className="projectsPage__projectWritingWrapper">
              <h2 className="projectsPage__projectName">
                Fire Alarm Arduino project
              </h2>
              <p className="projectsPage__projectDescription">
                Developed a portable fire alarm system using Arduinos.
              </p>
              <p className="projectsPage__projectLanguage">Language: C++</p>
            </div>
            <img className="projectsPage__projectImage" src={fireAlarm} />
          </div>
        </article>
      </Link>
      <Link className="projectsPage__link">
        <article className="projectsPage__project">
          <div className="projectsPage__projectWrapper">
            <div className="projectsPage__projectWritingWrapper">
              <h2 className="projectsPage__projectName">SRPN Calculator</h2>
              <p className="projectsPage__projectDescription">
                Enter numbers and operators in a specific order, and the
                calculator maintains a stack to perform calculation.
              </p>
              <p className="projectsPage__projectLanguage">Language: Python</p>
            </div>
            <img className="projectsPage__projectImage" src={SRPN} />
          </div>
        </article>
      </Link>
      <Link className="projectsPage__link">
        <article className="projectsPage__project">
          <div className="projectsPage__projectWrapper">
            <div className="projectsPage__projectWritingWrapper">
              <h2 className="projectsPage__projectName">Dungeon of Doom</h2>
              <p className="projectsPage__projectDescription">
                An adventure game where a player navigates through a dungeon
                collecing gold while avoiding a villian bot
              </p>
              <p className="projectsPage__projectLanguage">Language: Java</p>
            </div>
            <img className="projectsPage__projectImage" src={DOD} />
          </div>
        </article>
      </Link>
      <Link className="projectsPage__link">
        <article className="projectsPage__project">
          <div className="projectsPage__projectWrapper">
            <div className="projectsPage__projectWritingWrapper">
              <h2 className="projectsPage__projectName">MingleU</h2>
              <p className="projectsPage__projectDescription">
                New icoming univeristy students will be able to meet and mingle
                with their classmates before starting university.
              </p>
              <p className="projectsPage__projectLanguage">
                Language: React JS
              </p>
            </div>
            <img className="projectsPage__projectImage" src={mingleU} />
          </div>
        </article>
      </Link>
      <Link className="projectsPage__link">
        <article className="projectsPage__project">
          <div className="projectsPage__projectWrapper">
            <div className="projectsPage__projectWritingWrapper">
              <h2 className="projectsPage__projectName">inStock</h2>
              <p className="projectsPage__projectDescription">
                Developed a full-stack application for managing and viewing
                inventory details across various warehouses, including the
                ability to add, edit, and display warehouses and their
                inventories
              </p>
              <p className="projectsPage__projectLanguage">
                Language: React JS
              </p>
            </div>

            <img className="projectsPage__projectImage" src={inStock} />
          </div>
        </article>
      </Link>
      <Link className="projectsPage__link">
        <article className="projectsPage__project">
          <div className="projectsPage__projectWrapper">
            <div className="projectsPage__projectWritingWrapper">
              <h2 className="projectsPage__projectName">Sudoku solver</h2>
              <p className="projectsPage__projectDescription">
                My sudoku solver implemented a backtracking algorithm using two
                heuristics which are MRV (Minimum remaining values) and LCV
                (Least constraint value).
              </p>
              <p className="projectsPage__projectLanguage">Language: Python</p>
            </div>
            <img className="projectsPage__projectImage" src={sudoku} />
          </div>
        </article>
      </Link>
      <Link className="projectsPage__link">
        <article className="projectsPage__project">
          <div className="projectsPage__projectWrapper">
            <div className="projectsPage__projectWritingWrapper">
              <h2 className="projectsPage__projectName">Dice game</h2>
              <p className="projectsPage__projectDescription">
                Utilized value iteration to optimise the gameplay strategies for
                my dice game, as it selects the most advantageous moves to
                maximize the score
              </p>
              <p className="projectsPage__projectLanguage">Language: Python</p>
            </div>
            <img className="projectsPage__projectImage" src={diceGame} />
          </div>
        </article>
      </Link>
      <Link className="projectsPage__link">
        <article className="projectsPage__project">
          <div className="projectsPage__projectWrapper">
            <div className="projectsPage__projectWritingWrapper">
              <h2 className="projectsPage__projectName">
                Spam classification{" "}
              </h2>
              <p className="projectsPage__projectDescription">
                Implemented a Naïve Bayes classifier for spam email detection,
                achieving an accuracy of 83.6% on test data
              </p>
              <p className="projectsPage__projectLanguage">Language: Python</p>
            </div>
            <img className="projectsPage__projectImage" src={spam} />
          </div>
        </article>
      </Link>
      <Link className="projectsPage__link">
        <article className="projectsPage__project">
          <div className="projectsPage__projectWrapper">
            <div className="projectsPage__projectWritingWrapper">
              <h2 className="projectsPage__projectName">Brainflix </h2>
              <p className="projectsPage__projectDescription">
                Built a video streaming platform.
              </p>
              <p className="projectsPage__projectLanguage">
                Language: React JS
              </p>
            </div>
            <img className="projectsPage__projectImage" src={brainFlix} />
          </div>
        </article>
      </Link>
      <Link className="projectsPage__link">
        <article className="projectsPage__project">
          <div className="projectsPage__projectWrapper">
            <div className="projectsPage__projectWritingWrapper">
              <h2 className="projectsPage__projectName">Band site </h2>
              <p className="projectsPage__projectDescription">
                Crafted an interactive band website featuring the biography and
                up to-date show schedules
              </p>
              <p className="projectsPage__projectLanguage">
                Language: JS, HTML, SCSS
              </p>
            </div>
            <img className="projectsPage__projectImage" src={bandSite} />
          </div>
        </article>
      </Link>
      <Link className="projectsPage__link">
        <article className="projectsPage__project">
          <div className="projectsPage__projectWrapper">
            <div className="projectsPage__projectWritingWrapper">
              <h2 className="projectsPage__projectName">Travel site </h2>
              <p className="projectsPage__projectDescription">
                Your able to view details and navigate to different destinations
                to find your dream holiday.
              </p>
              <p className="projectsPage__projectLanguage">
                Language: HTML, CSS
              </p>
            </div>
            <img className="projectsPage__projectImage" src={travelSite} />
          </div>
        </article>
      </Link>
      <Link className="projectsPage__link">
        <article className="projectsPage__project">
          <div className="projectsPage__projectWrapper">
            <div className="projectsPage__projectWritingWrapper">
              <h2 className="projectsPage__projectName">Coffee Shop</h2>
              <p className="projectsPage__projectDescription">
                This coffee shop website showcases a menu with product prices
                and provides easy navigation.
              </p>
              <p className="projectsPage__projectLanguage">
                Language: HTML, CSS
              </p>
            </div>
            <img className="projectsPage__projectImage" src={coffeeShop} />
          </div>
        </article>
      </Link>
    </div>
  );
}

export default ProjectsPage;
