import { Link } from "react-router-dom";
import { siteInfo, socialLinks, footerInfo } from "../data/content";
import instagramIcon from "../assets/icons/instagram.png";
import lineIcon from "../assets/icons/line.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import "./Footer.css";

const socialIcons = {
  instagram: instagramIcon,
  line: lineIcon,
  linkedin: linkedinIcon,
};

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3 className="footer-brand-name">{siteInfo.name}</h3>
          <p className="footer-brand-sub">{siteInfo.affiliation}</p>
        </div>

        <div className="footer-col">
          <p className="eyebrow footer-col-title">{footerInfo.helpTitle}</p>
          <p className="footer-col-text">{footerInfo.helpText}</p>
          <p className="footer-col-text">{footerInfo.helpContact}</p>
        </div>

        <div className="footer-col">
          <p className="eyebrow footer-col-title">Sosial Media</p>
          <div className="footer-social">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="footer-social-link"
              >
                <img src={socialIcons[s.icon]} alt={s.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-credit">{footerInfo.imageCredit}</p>
        <p className="footer-copyright">
          © {footerInfo.year} {siteInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
