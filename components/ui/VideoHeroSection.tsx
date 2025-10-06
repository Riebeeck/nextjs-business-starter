import BackgroundVideo from './BackgroundVideo';

/**
 * VideoHeroSection component props
 */
interface VideoHeroSectionProps {
  /** Primary video source (MP4 format) */
  videoSrc: string;
  /** Optional WebM video source for better compression */
  videoSrcWebM?: string;
  /** Fallback poster image for loading state and mobile */
  posterImage?: string;
  /** Overlay opacity (0-1), default 0.5 */
  overlayOpacity?: number;
  /** Whether to show video on mobile devices, default false */
  showOnMobile?: boolean;
  /** Hero section content */
  children: React.ReactNode;
}

/**
 * VideoHeroSection Component
 * 
 * A pre-configured hero section with background video.
 * Wraps BackgroundVideo with appropriate padding and content centering.
 * 
 * @example
 * ```tsx
 * <VideoHeroSection
 *   videoSrc="/videos/backgrounds/hero.mp4"
 *   posterImage="/videos/backgrounds/hero-poster.jpg"
 * >
 *   <h1>Welcome</h1>
 *   <p>Your description</p>
 * </VideoHeroSection>
 * ```
 */
export default function VideoHeroSection({
  videoSrc,
  videoSrcWebM,
  posterImage,
  overlayOpacity = 0.5,
  showOnMobile = false,
  children,
}: VideoHeroSectionProps) {
  return (
    <BackgroundVideo
      videoSrc={videoSrc}
      videoSrcWebM={videoSrcWebM}
      posterImage={posterImage}
      overlayOpacity={overlayOpacity}
      showOnMobile={showOnMobile}
      className="py-20 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {children}
      </div>
    </BackgroundVideo>
  );
}
