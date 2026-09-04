import { getToKnowUs } from "../data/content";
import Reveal from "./Reveal";
import "./PhotoGallery.css";
import photo1 from "../assets/images/gallery/photo-1.png";
import photo2 from "../assets/images/gallery/photo-2.png";
import photo3 from "../assets/images/gallery/photo-3.png";
import photo4 from "../assets/images/gallery/photo-4.png";
import photo5 from "../assets/images/gallery/photo-5.png";
import photo6 from "../assets/images/gallery/photo-6.png";
import photo7 from "../assets/images/gallery/photo-7.png";
import photo8 from "../assets/images/gallery/photo-8.png";
import photo9 from "../assets/images/gallery/photo-9.png";

const galleryPhotos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];
const rotations = [-6, 4, -3, 5, -4, 6, -5, 3, -7];

function PhotoGallery() {
  return (
    <section className="gallery">
      <div className="container gallery-grid">
        <Reveal className="gallery-copy">
          <p className="eyebrow gallery-eyebrow">{getToKnowUs.eyebrow}</p>
          <h2 className="gallery-title">{getToKnowUs.title}</h2>
          <p className="gallery-description">{getToKnowUs.description}</p>
        </Reveal>

        <div className="gallery-photos">
          {galleryPhotos.map((photo, i) => (
            <Reveal key={i} className="gallery-reveal-item" delay={i * 60}>
              <div
                className="gallery-polaroid"
                style={{ "--rotate": `${rotations[i % rotations.length]}deg` }}
              >
                <img
                  src={photo}
                  alt={`Prestasi mahasiswa ${i + 1}`}
                  className="gallery-polaroid-photo"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
