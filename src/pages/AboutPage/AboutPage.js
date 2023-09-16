import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.scss";
import Footer from "../../components/Footer/Footer";

function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="aboutPage__headerWrapper">
        <h1 className="aboutPage__title">About</h1>
        <DropdownMenu />
      </div>
      <div className="aboutPage__timeline">
        <Link
          className="aboutPage__link"
          to="https://www.sfx.ac.uk/about-us/2022-exam-results#:~:text=Our%20students%20achieved%20impressive%20results,had%20a%20100%25%20pass%20rate."
        >
          <article className="aboutPage__timelineCard aboutPage__timelineCard--aLevel">
            <h2 className="aboutPage__timelineYear">A-Levels</h2>
            <p className="aboutPage__timelineDescription aboutPage__timelineDescription--aLevel">
              My journey began with four challenging A-levels: Mathematics,
              Economics, Business Studies, and Further Mathematics. I dedicated
              myself to my studies and achieved outstanding results A, A, A, and
              C. This achievement set a high standard within my sixth-form
              college, earning me recognition for my dedication and excellence.
            </p>
          </article>
        </Link>
        <article className="aboutPage__timelineCard aboutPage__timelineCard--university">
          <h2 className="aboutPage__timelineYear aboutPage__timelineYear--university">University</h2>
          <p className="aboutPage__timelineDescription aboutPage__timelineDescription--university">
            Following my remarkable A-level results, I embarked on a new
            adventure at the University of Bath, where I pursued a degree in
            Computer Science. Despite having no prior coding experience, I
            approached this challenge with boundless enthusiasm. I was eager to
            learn, adapt, and make remarkable strides in the tech indsutry.
          </p>
        </article>
        <article className="aboutPage__timelineCard aboutPage__timelineCard--bootcamp">
          <h2 className="aboutPage__timelineYear aboutPage__timelineYear--bootcamp">
            Software Engineer Bootcamp
          </h2>
          <p className="aboutPage__timelineDescription aboutPage__timelineDescription--bootcamp">
            As my first year at university drew to a close, I realized that many
            of my peers possessed more advanced coding skills than I did. With
            internship applications on the horizon for all students, I
            recognized the need to level the playing field. This insight led me
            to enroll in a rigorous Software Engineer Bootcamp. By taking this
            step, I aimed to sharpen my programming skills and expand my
            professional network. This decision marked a pivotal moment in my
            journey toward becoming a well-rounded software engineer.
          </p>
        </article>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutPage;
