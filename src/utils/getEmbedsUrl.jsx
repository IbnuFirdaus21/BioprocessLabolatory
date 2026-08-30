// Converts a normal share link (YouTube watch/short link, or Google Drive
// file link) into an embeddable iframe URL. Returns null if the link
// format isn't recognized, so the caller can fall back to a plain link.
export function getEmbedUrl(url) {
    if (!url) return null;

    // YouTube: https://www.youtube.com/watch?v=VIDEO_ID
    const ytWatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
    if (ytWatch) return `https://www.youtube.com/embed/${ytWatch[1]}`;

    // YouTube short link: https://youtu.be/VIDEO_ID
    const ytShort = url.match(/youtu\.be\/([^?]+)/);
    if (ytShort) return `https://www.youtube.com/embed/${ytShort[1]}`;

    // Already an embed link
    if (url.includes("youtube.com/embed/")) return url;

    // Google Drive: https://drive.google.com/file/d/FILE_ID/view
    const drive = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
    if (drive) return `https://drive.google.com/file/d/${drive[1]}/preview`;

    return null;
}