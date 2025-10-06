'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * BackgroundVideo component for displaying video backgrounds with theme-aware overlays.
 * Supports responsive behavior, reduced motion preferences, and mobile optimization.
 */
interface BackgroundVideoProps {
  /** Primary video source (MP4 format) */
  videoSrc: string;
  /** Optional WebM video source for better compression */
  videoSrcWebM?: string;
  /** Fallback poster image for loading state and mobile */
  posterImage?: string;
  /** Overlay opacity (0-1), default 0.4 */
  overlayOpacity?: number;
  /** Optional custom overlay color, defaults to theme background */
  overlayColor?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show video on mobile devices, default false */
  showOnMobile?: boolean;
  /** Content to overlay on the video */
  children?: React.ReactNode;
}

/**
 * BackgroundVideo Component
 * 
 * Displays a looping background video with theme-aware overlay.
 * Automatically respects user preferences for reduced motion and
 * optimizes for mobile by showing poster image instead of video.
 * 
 * @example
 * ```tsx
 * <BackgroundVideo
 *   videoSrc="/videos/backgrounds/hero.mp4"
 *   posterImage="/videos/backgrounds/hero-poster.jpg"
 *   overlayOpacity={0.5}
 * >
 *   <h1>Your Content</h1>
 * </BackgroundVideo>
 * ```
 */
export default function BackgroundVideo({
  videoSrc,
  videoSrcWebM,
  posterImage,
  overlayOpacity = 0.4,
  overlayColor,
  className = '',
  showOnMobile = false,
  children,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes to reduced motion preference
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);

    // Check if mobile
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldShowVideo = !prefersReducedMotion && (showOnMobile || !isMobile);

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Video Background or Poster Image */}
      {shouldShowVideo ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={posterImage}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
          aria-hidden="true"
          role="presentation"
        >
          {videoSrcWebM && <source src={videoSrcWebM} type="video/webm" />}
          <source src={videoSrc} type="video/mp4" />
          {posterImage && (
            <img
              src={posterImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </video>
      ) : (
        posterImage && (
          <img
            src={posterImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
        )
      )}

      {/* Theme-aware Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: overlayColor
            ? overlayColor
            : `linear-gradient(135deg, rgba(var(--theme-background-rgb), ${overlayOpacity}) 0%, rgba(var(--theme-background-rgb), ${overlayOpacity * 0.8}) 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
