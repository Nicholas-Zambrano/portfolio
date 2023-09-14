import "./JavaPage.scss";
import { Link } from "react-router-dom";
import DOD from "../../assets/images/DOD.png";

function JavaPage() {
  return (
    <div className="javaPage">
      <div className="javaPage__headerWrapper">
       
        <h1 className="javaPage__title">Java</h1>
      </div>

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
    </div>
  );
}

export default JavaPage;
