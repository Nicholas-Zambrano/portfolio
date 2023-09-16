import { Link } from "react-router-dom";
import inStock from "../../assets/images/inStock.png";
import mingleU from "../../assets/images/mingleU.png";
import Footer from "../../components/Footer/Footer";

import "./FullStackPage.scss"
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

function FullStackPage() {
  return (
    <div className="fullStack">
      <div className="fullStack__headerWrapper">
        <h1 className="fullStack__title">Full Stack Application</h1>
    <DropdownMenu/>
      </div>
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
                Language: React JS, MySQL
              </p>
            </div>

            <img className="projectsPage__projectImage" src={inStock} alt="in stock "/>
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
                Language: React JS, MySQL
              </p>
            </div>
            <img className="projectsPage__projectImage" src={mingleU}  alt="mingle u" />
          </div>
        </article>
      </Link>
      <Footer/>
    </div>
  );
}

export default FullStackPage;
