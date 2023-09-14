import fireAlarm from "../../assets/images/fire-alarm.png";
import { Link } from "react-router-dom";
function CPage() {
  return (
    <div>
      <h1>c page</h1>

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
              <p className="projectsPage__projectLanguage">Language: C</p>
            </div>
            <img className="projectsPage__projectImage" src={fireAlarm} />
          </div>
        </article>
      </Link>
    </div>
  );
}

export default CPage;
