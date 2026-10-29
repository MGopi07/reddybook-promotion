'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  poster: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, poster, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch(() => {
        setIsPlaying(true);
        setHasStarted(true);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="video-player-container" aria-label={`Video player: ${title}`}>
      <div className="video-player-wrapper" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={videoUrl}
          poster={poster}
          className="video-element"
          playsInline
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Big Play Overlay (shown before starting or when paused) */}
        <div className={`video-player-overlay ${isPlaying ? 'playing' : ''}`}>
          <div className="video-big-play-btn" aria-label={isPlaying ? 'Pause' : 'Play'}>
            <Play size={32} fill="#070A0F" color="#070A0F" style={{ marginLeft: 4 }} />
          </div>
        </div>

        {/* Control Bar (subtle bottom strip) */}
        {hasStarted && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '12px 16px',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 10,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                onClick={togglePlay}
                style={{ color: '#FFFFFF', display: 'flex', alignItems: 'center' }}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={handleReset}
                style={{ color: '#FFFFFF', display: 'flex', alignItems: 'center' }}
                aria-label="Restart video"
              >
                <RotateCcw size={18} />
              </button>
              <button
                onClick={toggleMute}
                style={{ color: '#FFFFFF', display: 'flex', alignItems: 'center' }}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <span style={{ fontSize: '0.8rem', color: '#CBD5E1', fontFamily: 'var(--font-heading)' }}>
                PREVIEW BROADCAST STREAM
              </span>
            </div>

            <div>
              <button
                onClick={handleFullscreen}
                style={{ color: '#FFFFFF', display: 'flex', alignItems: 'center' }}
                aria-label="Fullscreen"
              >
                <Maximize2 size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
