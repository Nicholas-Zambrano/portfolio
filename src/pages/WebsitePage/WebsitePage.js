import travelSite from "../../assets/images/travelSite.png";
import coffeeShop from "../../assets/images/coffeeShop.png";
import bandSite from "../../assets/images/bandSite.png";
import { Link } from "react-router-dom";
import "./WebsitePage.scss";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
function WebsitePage() {
  return (
    <div className="websitePage">
      <div className="websitePage__headerWrapper">
        <h1 className="websitePage__title">HTML,SCSS,CSS</h1>
        <DropdownMenu />
      </div>

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
    </div>
  );
}

export default WebsitePage;
