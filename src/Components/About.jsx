import "../CSS/About.css";
import Footer from "./Footer";

function About() {
  return (
    <div className="page-wrapper">
      <div className="about-container">
        <h1 className="about-title">About FilmyAdda</h1>
        <div className="about-content">
          <div className="about-section">
            <h2 className="section-title">Our Story</h2>
            <p className="section-text">
              FilmyAdda is your one-stop destination for movie tickets, showtimes, and entertainment.
              We bring the magic of cinema to your fingertips with easy booking and great offers.
            </p>
          </div>
          <div className="about-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              To make movie booking simple, affordable, and enjoyable for everyone.
              We believe everyone deserves access to great entertainment.
            </p>
          </div>
          <div className="about-section">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-text">
              Email: support@filmyadda.com<br />
              Phone: +91 98765 43210<br />
              Address: 123 Cinema Street, Mumbai, India
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
