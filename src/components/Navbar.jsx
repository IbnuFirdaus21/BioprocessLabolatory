import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { siteInfo } from "../data/content";
import "./Navbar.css";
import icon from "../assets/icons/icon.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <span className="navbar-mark" aria-hidden="true">
            <img src={icon} alt="" />
          </span>
          <span className="navbar-name">{siteInfo.name}</span>
        </Link>

        <nav className="navbar-links" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} className="navbar-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={`navbar-toggle${isOpen ? " is-open" : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`navbar-mobile${isOpen ? " is-open" : ""}`}
        aria-label="Primary mobile"
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="navbar-mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
