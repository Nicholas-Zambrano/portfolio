import { Link } from "react-router-dom";
import brainFlix from "../../assets/images/brainFlix.png";
import bandSite from "../../assets/images/bandSite.png";
import "./JavaScriptPage.scss";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

function JavaScript() {
  return (
    <div className="javaScript">
      <div className="javaScript__headerWrapper">
        <h1 className="javaScript__title">JS</h1>
        <DropdownMenu/>
      </div>
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

      <h2 className="javaScript__subheader javaScript__subheaderWrapper">React</h2>
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
    </div>
  );
}

export default JavaScript;
