import { materials } from "../data/material";
import { getEmbedUrl } from "../utils/getEmbedsUrl";
import "./Material.css";

function Material() {
    return (
        <section id="material" className="material textured">
            <div className="container">
                <p className="eyebrow material-eyebrow">Modul Praktikum</p>
                <h2 className="material-title">Material</h2>
                <p className="material-subtitle">
                    Unduh modul dan tonton video penjelasan sebelum sesi praktikum berlangsung.
                </p>
                <div className="material-list">
                    {materials.map((item) => {
                        const embedUrl = getEmbedUrl(item.videoUrl);

                        return (
                            <article key={item.id} className="material-card">
                                {embedUrl && (
                                    <div className="material-video">
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
                                    <h3 className="material-card-title">{item.title}</h3>
                                    <p className="material-card-description">{item.description}</p>
                                </div>

                                <div className="material-card-actions">
                                    {item.fileUrl && (
                                        <a href={item.fileUrl} className="btn btn-outline material-card-link" download>
                                        Unduh PDF
                                        <span aria-hidden="true">↓</span>
                                        </a>
                                    )}
                                    {/* Fallback link, shown only if the video URL couldn't be embedded */}
                                    {item.videoUrl && !embedUrl && (
                                            <a
                                            href={item.videoUrl}
                                            className="btn btn-outline material-card-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                            Tonton Video
                                            <span aria-hidden="true">↗</span>
                                            </a>
                                    )}
                                </div>
                            </article>
                    );
                })}
                </div>
            </div>
        </section>
    );
}

export default Material;