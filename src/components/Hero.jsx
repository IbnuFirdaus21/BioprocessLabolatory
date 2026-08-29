import { hero } from "../data/content";
import heroPhoto from "../assets/images/hero-team.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero textured">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <a href={hero.ctaHref} className="btn btn-brass">
            {hero.ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <img src={heroPhoto} alt="Anggota Bioprocess Laboratory" />
        </div>
      </div>
    </section>
  );
}

export default Hero;