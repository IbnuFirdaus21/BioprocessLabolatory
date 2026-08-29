import { materials } from "../data/material";
import "./Material.css";


function Material() {
    return (
        <section id="material" className="material textured">
            <div className="container">
                <p className="eyebrow material-eyebrow">Modul Praktikum</p>
                <h2 className="material-title">Material</h2>
                <p className="material-subtitle">
                    Unduh modul untuk dipelajari sebelum sesi praktikum berlangsung.
                </p>
                <div className="material-list">
                    {materials.map((item) => (
                        <article key={item.id} className="material-card">
                            <div>
                                <h3 className="material-card-title">{item.title}</h3>
                                <p className="material-card-description">{item.description}</p>
                            </div>
                            <a href={item.fileUrl} className="btn btn-outline material-card-link" download>
                                Unduh PDF
                                <span aria-hidden="true">↓</span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Material;
