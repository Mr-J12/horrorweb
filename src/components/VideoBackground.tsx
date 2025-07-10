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
      <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
      <source src={videoSrc.replace('.mp4', '.ogg')} type="video/ogg" />
    </video>
  );
};

export default VideoBackground;