import { useState, useMemo } from "react";
import { Play, Video as VideoIcon } from "lucide-react";

interface YouTubeVideoProps {
  url?: string;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Parses any common YouTube URL into a video ID.
 * Supports: youtu.be/<id>, /watch?v=<id>, /embed/<id>, /shorts/<id>
 */
const extractYouTubeId = (url?: string): string | null => {
  if (!url) return null;
  const trimmed = url.trim();
  if (!trimmed) return null;
  const patterns = [
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|v\/))([\w-]{11})/,
  ];
  for (const re of patterns) {
    const m = trimmed.match(re);
    if (m && m[1]) return m[1];
  }
  // Bare 11-char ID
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
  return null;
};

const YouTubeVideo = ({ url, title, description, className = "" }: YouTubeVideoProps) => {
  const videoId = useMemo(() => extractYouTubeId(url), [url]);
  const [playing, setPlaying] = useState(false);

  if (!videoId) {
    return (
      <div className={`w-full ${className}`}>
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-navy bg-gradient-navy flex flex-col items-center justify-center text-primary-foreground p-6 text-center border border-accent/20">
          <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-4">
            <VideoIcon className="w-8 h-8 text-accent" aria-hidden />
          </div>
          <p className="font-display text-lg md:text-xl font-semibold mb-1">▶ Video Coming Soon</p>
          <p className="text-sm opacity-80 max-w-sm">This educational video will be available here.</p>
        </div>
        {(title || description) && (
          <div className="mt-3">
            {title && <p className="font-display font-semibold text-foreground text-sm md:text-base">{title}</p>}
            {description && <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>}
          </div>
        )}
      </div>
    );
  }

  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className={`w-full ${className}`}>
      <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-navy bg-gradient-navy relative group">
        {playing ? (
          <iframe
            src={embedSrc}
            title={title}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="absolute inset-0 w-full h-full group/play"
          >
            <img
              src={thumb}
              alt={title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/play:scale-105"
            />
            <span className="absolute inset-0 bg-navy/30 group-hover/play:bg-navy/20 transition-colors" aria-hidden />
            <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
              <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold transition-transform duration-300 group-hover/play:scale-110">
                <Play className="w-7 h-7 md:w-9 md:h-9 text-accent-foreground fill-current ml-1" />
              </span>
            </span>
          </button>
        )}
      </div>
      {(title || description) && (
        <div className="mt-3">
          {title && <p className="font-display font-semibold text-foreground text-sm md:text-base">{title}</p>}
          {description && <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default YouTubeVideo;
