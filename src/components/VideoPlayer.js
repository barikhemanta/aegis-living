import React, { useRef, useState, useEffect } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const tooltipRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  const handleUserInteraction = () => {
    setIsUserInteracted(true);
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setDuration(videoRef.current.duration);
      }).catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  };

  const handlePlayPause = (event) => {
    event.stopPropagation();
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Error playing video:", error);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / videoRef.current.duration) * 100;
    setProgress(progress);
    setCurrentTime(currentTime);

    // Update tooltip position directly based on progress
    if (tooltipRef.current) {
      tooltipRef.current.style.left = `${progress}%`;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="video-player" onClick={!isUserInteracted ? handleUserInteraction : null}>
      <video
        ref={videoRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onClick={handlePlayPause} // Ensures the video pauses/plays on click
      />
      {!isUserInteracted && (
        <div className="overlay">
          <button className="play-overlay" onClick={handleUserInteraction}>
            ►
          </button>
        </div>
      )}
      <div
        className="controls"
        onMouseEnter={() => (progressBarRef.current.style.opacity = 1)}
        onMouseLeave={() => (progressBarRef.current.style.opacity = 0)}
      >
        <div className="play-pause-container">
          <button onClick={handlePlayPause} className="play-pause">
            {isPlaying ? '❚❚' : '►'}
          </button>
        </div>
        <div className="progress-container">
          <div
            ref={progressBarRef}
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
          <div
            ref={tooltipRef}
            className="tooltip"
            style={{ left: `${progress}%` }}
          >
            {formatTime(currentTime)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
