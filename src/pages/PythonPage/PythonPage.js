import { Link } from "react-router-dom";
import SRPN from "../../assets/images/SRPN.png";
import diceGame from "../../assets/images/diceGame.png";
import sudoku from "../../assets/images/sudoku.png";
import spam from "../../assets/images/spam-classification.png";
import "./PythonPage.scss";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import Footer from "../../components/Footer/Footer";

function PythonPage() {
  return (
    <div className="pythonPage">
      <div className="pythonPage__header">
        <h1 className="pythonPage__title">Pyhon</h1>
        <DropdownMenu />
      </div>
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
      </Link>{" "}
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
      </Link>{" "}
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
      <Footer/>
    </div>
  );
}
export default PythonPage;
