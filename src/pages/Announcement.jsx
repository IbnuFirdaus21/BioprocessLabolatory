import { announcements } from "../data/announcements";
import "./Announcement.css";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function Announcement() {
  return (
    <section className="announcement-page">
      <div className="container">
        <p className="eyebrow section-eyebrow">Info Terbaru</p>
        <h1 className="section-title">Announcement</h1>
        <p className="section-subtitle">
          Pengumuman resmi seputar jadwal, tugas, dan kegiatan Bioprocess Laboratory.
        </p>

        <div className="announcement-list">
          {announcements.map((item) => (
            <article key={item.id} className="announcement-card">
              <time className="announcement-date" dateTime={item.date}>
                {formatDate(item.date)}
              </time>
              <h2 className="announcement-title">{item.title}</h2>
              <p className="announcement-content">{item.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Announcement;