import { whatsHot } from "../data/content";
import "./WhatsHot.css";
import WhatsHotImage from "../assets/images/whatshot.png";

function WhatsHot() {
  return (
    <section className="whats-hot">
      <div className="container whats-hot-grid">
        <img
          src={WhatsHotImage}
          alt="Prestasi mahasiswa"
          className="whats-hot-placeholder"
        />

        <div className="whats-hot-copy">
          <p className="eyebrow whats-hot-eyebrow">{whatsHot.eyebrow}</p>
          <h2 className="whats-hot-title">{whatsHot.title}</h2>
          <p className="whats-hot-description">{whatsHot.description}</p>
        </div>
      </div>
    </section>
  );
}

export default WhatsHot;
