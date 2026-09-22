'use client';

import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function PromoVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect user prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (!video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          } else {
            // Autoplay on intersection only if not restricted by reduced-motion settings
            if (!prefersReducedMotion && video.paused) {
              video.play().then(() => setIsPlaying(true)).catch(() => {
                // Browser policy might block autoplay, fallback to click to play
                setIsPlaying(false);
              });
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      trackEvent({ name: 'video_play' });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="video" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="badge" style={{ margin: '0 auto 16px auto', display: 'table' }}>
          PROMO VIDEO
        </div>
        <h2 className="section-title">Unsere Angebote in Bewegung</h2>
        <p className="section-subtitle">
          Entdecke unsere aktuellen Aktionen in wenigen Sekunden.
        </p>

        {/* Video Smartphone Device Mockup Container */}
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            position: 'relative',
            borderRadius: '28px',
            padding: '12px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-strong)',
            boxShadow: '0 24px 60px var(--shadow-color)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#090B10',
            }}
          >
            <video
              ref={videoRef}
              src="/video/45.mp4"
              poster="/images/promo-poster.webp"
              preload="metadata"
              playsInline
              muted
              controls
              loop
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              aria-label="Salt Promo Angebote Video"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Custom Play Overlay Button (only shown before first user play) */}
            {!isPlaying && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Video abspielen"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(9, 11, 16, 0.4)',
                  backdropFilter: 'blur(4px)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 2,
                  transition: 'background 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'var(--cyan)',
                    color: 'var(--dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 30px rgba(59, 232, 255, 0.6)',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '4px' }}>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
