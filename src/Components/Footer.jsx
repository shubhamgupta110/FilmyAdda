import "../CSS/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-logo">
          <span className="f-film">Film</span>
          <span className="f-adda">yadda</span>
        </p>
        <p className="footer-note">Under construction. Check back soon.</p>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Filmyadda. All rights reserved.</p>
      </div>
    </footer>
  );
}