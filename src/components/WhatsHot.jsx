import { whatsHot } from "../data/content";
import Reveal from "./Reveal";
import "./WhatsHot.css";
import achievementPhoto from "../assets/images/whatshot.png";

function WhatsHot() {
  return (
    <section className="whats-hot">
      <div className="container whats-hot-grid">
        <Reveal className="whats-hot-photo">
          <img
            src={achievementPhoto}
            alt="Prestasi mahasiswa"
            className="whats-hot-placeholder"
          />
        </Reveal>

        <Reveal className="whats-hot-copy" delay={150}>
          <p className="eyebrow whats-hot-eyebrow">{whatsHot.eyebrow}</p>
          <h2 className="whats-hot-title">{whatsHot.title}</h2>
          <p className="whats-hot-description">{whatsHot.description}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default WhatsHot;

