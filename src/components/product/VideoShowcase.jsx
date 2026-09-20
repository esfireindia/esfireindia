import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createWhatsAppUrl } from '../../data/products';
import { track } from '../../utils/analytics';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
}

function VideoCard({ video, activeId, activate, deactivate, hoverCapable, reducedMotion }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [available, setAvailable] = useState(null);
  const [posterFailed, setPosterFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showHint, setShowHint] = useState(true);

  const resetPlayback = useCallback(
    (notify = true) => {
      const element = videoRef.current;
      if (element) {
        element.pause();
        element.muted = true;
        try {
          element.currentTime = 0;
        } catch {
          // The media may not have loaded enough metadata to seek yet.
        }
      }
      setPlaying(false);
      setMuted(true);
      setLoaded(false);
      if (notify) deactivate(video.id);
    },
    [deactivate, video.id],
  );

  useEffect(() => {
    const controller = new AbortController();

    fetch(video.src, { method: 'HEAD', signal: controller.signal })
      .then((response) => {
        const contentType = response.headers.get('content-type') || '';
        setAvailable(response.ok && contentType.startsWith('video/'));
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setAvailable(false);
      });

    return () => controller.abort();
  }, [video.src]);

  useEffect(() => {
    if (activeId === video.id || (!loaded && !playing)) return undefined;
    const frame = window.requestAnimationFrame(() => resetPlayback(false));
    return () => window.cancelAnimationFrame(frame);
  }, [activeId, loaded, playing, resetPlayback, video.id]);

  useEffect(() => {
    if (!loaded || activeId !== video.id || !videoRef.current) return;

    const element = videoRef.current;
    element.muted = muted;
    const attempt = element.play();

    if (!attempt) return;
    attempt.catch((error) => {
      if (error?.name === 'AbortError') return;
      if (!element.muted) {
        element.muted = true;
        setMuted(true);
        element.play().catch((fallbackError) => {
          if (fallbackError?.name !== 'AbortError') resetPlayback();
        });
      } else {
        resetPlayback();
      }
    });
  }, [activeId, loaded, muted, resetPlayback, video.id]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.3 && activeId === video.id) resetPlayback();
      },
      { threshold: [0, 0.3, 1] },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [activeId, resetPlayback, video.id]);

  const startPlayback = (withSound) => {
    if (!available) return;
    activate(video.id);
    setLoaded(true);
    setMuted(!withSound);
    track('video_play', { video: video.id });
    if (withSound) track('video_sound_on', { video: video.id });
  };

  const togglePlayback = () => {
    if (!available) return;

    if (!hoverCapable) {
      if (playing) resetPlayback();
      else startPlayback(true);
      return;
    }

    if (!playing) {
      startPlayback(true);
      return;
    }

    // Browsers only allow sound after a click or tap, so hover previews stay silent and sound starts on click.
    const nextMuted = !muted;
    if (videoRef.current) videoRef.current.muted = nextMuted;
    setMuted(nextMuted);
    setShowHint(false);
    if (!nextMuted) track('video_sound_on', { video: video.id });
  };

  const handlePointerEnter = () => {
    if (hoverCapable && !reducedMotion && available && !playing) startPlayback(false);
  };

  const handlePointerLeave = () => {
    if (!hoverCapable) return;
    if (playing || loaded) resetPlayback();
    setShowHint(false);
  };

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    togglePlayback();
  };

  const isUnavailable = available === false;
  const ariaLabel = isUnavailable
    ? `${video.label} video coming soon`
    : `${playing ? 'Control' : 'Play'} video: ${video.label}`;

  return (
    <button
      type="button"
      className={`video-card${playing ? ' is-playing' : ''}${isUnavailable ? ' is-unavailable' : ''}`}
      ref={cardRef}
      tabIndex={isUnavailable ? -1 : 0}
      aria-label={ariaLabel}
      aria-pressed={playing && !muted}
      onClick={togglePlayback}
      onKeyDown={handleKeyDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onFocus={handlePointerEnter}
      onBlur={handlePointerLeave}
    >
      {!posterFailed && (
        <img
          className="video-poster"
          src={video.poster}
          alt=""
          loading="lazy"
          onError={() => setPosterFailed(true)}
        />
      )}
      {loaded && !isUnavailable && (
        <video
          ref={videoRef}
          src={video.src}
          preload="none"
          playsInline
          loop
          muted={muted}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => {
            setAvailable(false);
            resetPlayback();
          }}
        >
          <track kind="captions" srcLang="en" label="English" />
        </video>
      )}
      <span className="video-card-shade" aria-hidden="true" />
      <span className="video-play-icon" aria-hidden="true">
        {playing ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}
      </span>
      {playing && (
        <span className="video-sound-icon" aria-hidden="true">
          {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
        </span>
      )}
      {playing && muted && showHint && hoverCapable && (
        <span className="video-sound-hint">Click for sound</span>
      )}
      <span className="video-card-label">{video.label}</span>
      {isUnavailable && <span className="video-coming-soon">Coming soon</span>}
    </button>
  );
}

export function VideoShowcase({ videos, reviewPrompt }) {
  const [activeId, setActiveId] = useState(null);
  const hoverCapable = useMediaQuery('(hover: hover) and (pointer: fine)');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const activate = useCallback((id) => setActiveId(id), []);
  const deactivate = useCallback((id) => {
    setActiveId((current) => (current === id ? null : current));
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) setActiveId(null);
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return (
    <section className="video-showcase">
      <div className="shell video-showcase-heading">
        <div>
          <span className="kicker">LIVE VIDEOS</span>
          <h2>See it live.</h2>
        </div>
        <p>{hoverCapable ? 'Hover to preview. Click for sound.' : 'Tap to play.'}</p>
      </div>
      <div className="shell video-grid">
        {videos.map((video) => (
          <VideoCard
            video={video}
            activeId={activeId}
            activate={activate}
            deactivate={deactivate}
            hoverCapable={hoverCapable}
            reducedMotion={reducedMotion}
            key={video.id}
          />
        ))}
      </div>
      {reviewPrompt?.copy && reviewPrompt?.message && (
        <div className="shell video-review-line">
          <span>{reviewPrompt.copy}</span>
          <a
            href={createWhatsAppUrl(reviewPrompt.message)}
            target="_blank"
            rel="noreferrer"
          >
            SHARE ON WHATSAPP
          </a>
        </div>
      )}
    </section>
  );
}
