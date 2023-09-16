import github from "../../assets/images/github.png";
import linkledin from "../../assets/images/linkledin.png";
import { Link } from "react-router-dom";

function footer() {
  return (
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
  );
}

export default footer;
