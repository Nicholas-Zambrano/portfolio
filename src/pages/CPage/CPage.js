import fireAlarm from "../../assets/images/fire-alarm.png";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

import "./CPage.scss";
function CPage() {
  return (
    <div className="CPage">
      <div className="CPage__headerWrapper">
        <h1 className="CPage__title">C</h1>
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
              <p className="projectsPage__projectLanguage">Language: C</p>
            </div>
            <img className="projectsPage__projectImage" src={fireAlarm} alt="fire alarm" />
          </div>
        </article>
      </Link>
      <Footer/>
    </div>
  );
}

export default CPage;
