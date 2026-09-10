import { hero } from "../data/content";
import bgPhoto from "../assets/images/BGbio.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero hero-bg-photo"
      style={{ backgroundImage: `url(${bgPhoto})` }}
    >
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow hero-anim" style={{ animationDelay: "0.05s" }}>
            {hero.eyebrow}
          </p>
          <h1 className="hero-title hero-anim" style={{ animationDelay: "0.15s" }}>
            {hero.title}
          </h1>
          <p className="hero-description hero-anim" style={{ animationDelay: "0.25s" }}>
            {hero.description}
          </p>
          <a
            href={hero.ctaHref}
            className="btn btn-brass hero-anim"
            style={{ animationDelay: "0.35s" }}
          >
            {hero.ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;