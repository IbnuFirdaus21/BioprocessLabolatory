// Menggunakan util getEmbedUrl yang sudah ada di src/utils/getEmbedsUrl.jsx.
import { safetyInduction } from "../data/safetyInduction";
import { getEmbedUrl } from "../utils/getEmbedsUrl";
import Reveal from "../components/Reveal";
import "./SafetyInduction.css";

function SafetyInduction() {
  const embedUrl = getEmbedUrl(safetyInduction.videoUrl);

  return (
    <section id="safety-induction" className="safety-induction textured">
      <div className="container safety-induction-wrap">
        <Reveal>
          <p className="eyebrow safety-induction-eyebrow">Keselamatan Laboratorium</p>
          <h1 className="safety-induction-title">{safetyInduction.title}</h1>
        </Reveal>

        <Reveal delay={100}>
          {embedUrl ? (
            <div className="safety-induction-video">
              <iframe
                src={embedUrl}
                title={safetyInduction.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <a
              href={safetyInduction.videoUrl}
              className="btn btn-outline safety-induction-video-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tonton Video
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </Reveal>

        <Reveal delay={200}>
          <p className="safety-induction-description">{safetyInduction.description}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default SafetyInduction;
