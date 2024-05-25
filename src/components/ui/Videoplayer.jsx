import React from 'react';

const VideoPlayer = ({ url, captions, currentTime, videoRef }) => {
  const displayedCaption = captions.find(
    caption => currentTime >= caption.start && currentTime <= caption.end
  )?.text;

  return (
    <div className="relative">
      <video ref={videoRef} controls className="h-72" src={url}></video>
      {displayedCaption && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
          {displayedCaption}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
