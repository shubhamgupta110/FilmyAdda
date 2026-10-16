import "../CSS/Navbar.css";

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
            <li><a className="nav-link" href="#movies" onClick={(e) => { e.preventDefault(); onLinkClick("Movies"); }}>Movies</a></li>
            <li><a className="nav-link" href="#theatres" onClick={(e) => { e.preventDefault(); onLinkClick("Theatres"); }}>Theatres</a></li>
            <li><a className="nav-link" href="#offers" onClick={(e) => { e.preventDefault(); onLinkClick("Offers"); }}>Offers</a></li>
            <li><a className="nav-link" href="#bookings" onClick={(e) => { e.preventDefault(); onLinkClick("My Bookings"); }}>
              My bookings
            </a></li>
            <li><a className="nav-link" href="#contact" onClick={(e) => { e.preventDefault(); onLinkClick("Contact"); }}>
              Contact
            </a></li>
            <li><a className="nav-link" href="#about" onClick={(e) => { e.preventDefault(); onLinkClick("About"); }}>
              About
            </a></li>
          </ul>
          <a className="btn-signin" href="#signin" onClick={(e) => { e.preventDefault(); onLinkClick("Sign In"); }}>
            Sign in
          </a>
        </nav>
      </div>
    </header>
  );
}