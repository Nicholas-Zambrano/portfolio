import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import Footer from "../../components/Footer/Footer";

import "./ContactPage.scss";

function ContactPage() {
  return (
    <div className="contact">
      <div className="contact__headerWrapper">
        <h1 className="contact__title">Contact Me</h1>
        <DropdownMenu/>
      </div>

      <div className="contact__container">
        <div className="contact__card">
          <form
            action="https://formsubmit.co/nicholaszambrano2004@gmail.com"
            method="POST"
            className="contact__form"
          >
            <div className="contact__formGroup contact__formGroup--name">
              <label className="contact__label">Your Name </label>
              <input
                type="text"
                placeholder="Your Name"
                id="name"
                name="name"
                className="contact__input"
                required
              />
            </div>
            <div className="contact__formGroup contact__formGroup--email ">
              <label className="contact__label">Your Email</label>
              <input
                type="emai"
                id="email"
                name="email"
                placeholder="Your Email"
                className="contact__input"
                required
              />
            </div>

            <div className="contact__formGroup contact__formGroup--message">
              <label className="contact__label">Message</label>
              <input
                type="text"
                placeholder="Your Message"
                id="message"
                name="message"
                className="contact__input"
                required
              />
            </div>

            <div>
              <button className="contact__button" type="submit">
                {" "}
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default ContactPage;
