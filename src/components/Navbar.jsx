import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { siteInfo } from "../data/content";
import logo from "../assets/icons/icon.png";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setOpenMobileDropdown(null);
  }, [location]);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Bioprocess Laboratory" className="navbar-mark" />
          <span className="navbar-name">{siteInfo.name}</span>
        </Link>

        <nav className="navbar-links" aria-label="Primary">
          {navLinks.map((link) =>
            link.type === "dropdown" ? (
              <div className="navbar-dropdown" key={link.label}>
                <button type="button" className="navbar-link navbar-dropdown-trigger">
                  {link.label}
                </button>
                <div className="navbar-dropdown-menu">
                  {link.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="navbar-dropdown-item"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.label} to={link.href} className="navbar-link">
                {link.label}
              </Link>
            )
          )}
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
        {navLinks.map((link) =>
          link.type === "dropdown" ? (
            <div className="navbar-mobile-dropdown" key={link.label}>
              <button
                type="button"
                className="navbar-mobile-link navbar-mobile-dropdown-trigger"
                onClick={() =>
                  setOpenMobileDropdown((v) => (v === link.label ? null : link.label))
                }
                aria-expanded={openMobileDropdown === link.label}
              >
                {link.label}
              </button>
              <div
                className={`navbar-mobile-submenu${
                  openMobileDropdown === link.label ? " is-open" : ""
                }`}
              >
                {link.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-mobile-submenu-item"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={link.label}
              to={link.href}
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}

export default Navbar;
