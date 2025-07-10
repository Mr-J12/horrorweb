import React from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImage?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc, fallbackImage }) => {
  return (
    <video 
      className="video-background" 
      autoPlay 
      loop 
      muted 
      playsInline
      style={{ 
        backgroundImage: fallbackImage ? `url(${fallbackImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;