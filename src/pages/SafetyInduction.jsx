// Menggunakan util getEmbedUrl yang sudah ada di src/utils/getEmbedsUrl.jsx.
import { safetyInductionItems } from "../data/safetyInduction";
import { getEmbedUrl } from "../utils/getEmbedsUrl";
import Reveal from "../components/Reveal";
import "./SafetyInduction.css";

function SafetyInduction() {
  return (
    <section id="safety-induction" className="safety-induction textured">
      <div className="container">
        <Reveal>
          <p className="eyebrow safety-induction-eyebrow">Keselamatan Laboratorium</p>
          <h2 className="safety-induction-title">Safety Induction</h2>
          <p className="safety-induction-subtitle">
            Tonton video pengenalan keselamatan laboratorium sebelum sesi praktikum berlangsung.
          </p>
        </Reveal>

        <div className="safety-induction-list">
          {safetyInductionItems.map((item, i) => {
            const embedUrl = getEmbedUrl(item.videoUrl);

            return (
              <Reveal key={item.id} as="article" className="safety-induction-card" delay={i * 100}>
                {embedUrl && (
                  <div className="safety-induction-video">
                    <iframe
                      src={embedUrl}
                      title={`Video ${item.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                )}

                <div>
                  <h3 className="safety-induction-card-title">{item.title}</h3>
                  <p className="safety-induction-card-description">{item.description}</p>
                </div>

                {item.videoUrl && !embedUrl && (
                  <a
                    href={item.videoUrl}
                    className="btn btn-outline safety-induction-card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tonton Video
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SafetyInduction;
