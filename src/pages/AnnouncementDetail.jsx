import { Link, useParams } from "react-router-dom";
import { announcements } from "../data/announcements";
import "./AnnouncementDetail.css";

const URL_REGEX = /(https?:\/\/[^\s]+)/g;
const BULLET = /^[-*]\s+(.*)$/;
const NUMBERED = /^\d+\.\s+(.*)$/;

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Teks biasa -> potongan teks + link. URL http(s) otomatis jadi link yang bisa diklik.
function linkify(text) {
  return text.split(URL_REGEX).map((part, i) => {
    if (i % 2 === 0) return part;
    const trailing = part.match(/[.,;:!?)]+$/)?.[0] ?? "";
    const url = trailing ? part.slice(0, -trailing.length) : part;
    return (
      <span key={i}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
        {trailing}
      </span>
    );
  });
}

// Teks -> blok paragraf (p), poin (ul), dan daftar bernomor (ol).
// Baris kosong memisahkan paragraf. Baris berawalan "- " atau "* " jadi poin,
// berawalan "1. " jadi daftar bernomor. Baris teks yang berurutan jadi satu paragraf.
function parseBlocks(text) {
  const blocks = [];
  let current = null;
  const push = (type, line) => {
    if (current && current.type === type) {
      current.lines.push(line);
    } else {
      current = { type, lines: [line] };
      blocks.push(current);
    }
  };
  for (const rawLine of text.replace(/\r\n/g, "\n").split("\n")) {
    const line = rawLine.trim();
    if (!line) {
      current = null;
      continue;
    }
    const bullet = line.match(BULLET);
    const numbered = line.match(NUMBERED);
    if (bullet) push("ul", bullet[1]);
    else if (numbered) push("ol", numbered[1]);
    else push("p", line);
  }
  return blocks;
}

function AnnouncementDetail() {
  const { id } = useParams();
  const item = announcements.find((a) => a.id === id);

  if (!item) {
    return (
      <section className="announcement-detail-page">
        <div className="container">
          <div className="announcement-detail">
            <Link to="/announcement" className="announcement-back">
              &larr; Semua pengumuman
            </Link>
            <h1 className="announcement-detail-title">Pengumuman tidak ditemukan</h1>
            <p className="announcement-detail-body">
              Pengumuman ini mungkin sudah dihapus atau link-nya salah.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Pakai "body" jika ada dan tidak kosong; jika tidak, pakai "content".
  const text =
    typeof item.body === "string" && item.body.trim() ? item.body : item.content ?? "";
  const blocks = parseBlocks(text);

  return (
    <section className="announcement-detail-page">
      <div className="container">
        <article className="announcement-detail">
          <Link to="/announcement" className="announcement-back">
            &larr; Semua pengumuman
          </Link>

          <time className="announcement-detail-date" dateTime={item.date}>
            {formatDate(item.date)}
          </time>
          <h1 className="announcement-detail-title">{item.title}</h1>

          {item.image && (
            <img src={item.image} alt={item.title} className="announcement-detail-image" />
          )}

          <div className="announcement-detail-body">
            {blocks.map((block, i) => {
              if (block.type === "ul") {
                return (
                  <ul key={i}>
                    {block.lines.map((line, j) => (
                      <li key={j}>{linkify(line)}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "ol") {
                return (
                  <ol key={i}>
                    {block.lines.map((line, j) => (
                      <li key={j}>{linkify(line)}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={i}>
                  {block.lines.map((line, j) => (
                    <span key={j}>
                      {j > 0 && <br />}
                      {linkify(line)}
                    </span>
                  ))}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}

export default AnnouncementDetail;
