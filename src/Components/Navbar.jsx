import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({onLinkClick}) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="logo" href="/" aria-label="Filmyadda home">
          <svg
            className="logo-icon"
            viewBox="0 0 40 40"
            width="36"
            height="36"
            aria-hidden="true"
          >
            <polygon points="17,12 23,12 37,39 3,39" fill="#FFF3E0" fillOpacity="0.18" />
            <rect x="11" y="2" width="18" height="8" rx="3" fill="#FF9800" />
            <circle cx="20" cy="10" r="3.5" fill="#FFF3E0" />
          </svg>
          <span className="logo-text">
            <span className="logo-film">Filmy</span>
            <span className="logo-adda">Adda</span>
          </span>
        </a>

        <nav className="nav-menu">
          <ul className="nav-links">
            <li><Link className="nav-link" to ="/Movies" >Movies</Link></li>
            <li><Link className="nav-link" to ="/Theatres">Theatres</Link></li>
            <li><Link className="nav-link" to ="/Offers">Offers</Link></li>
            <li><Link className="nav-link" to ="/">My bookings</Link></li>
            <li><Link className="nav-link" to ="/Shows">Shows</Link></li>
            <li><Link className="nav-link" to ="/About">About</Link></li>
            
          </ul>
          <Link className="btn-signup" to ="/Signup">            Sign Up
          </Link>
           <Link className="btn-signin" to ="/Signin">            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}