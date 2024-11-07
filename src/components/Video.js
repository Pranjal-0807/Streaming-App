import React from "react";

const Video = ({ data }) => {
  const { title, channelTitle, publishedAt } = data?.snippet;
  const { viewCount } = data?.statistics;
  const { url } = data?.snippet?.thumbnails?.high;

  return (
    <div className="m-2 border border-gray-300 rounded-lg overflow-hidden shadow-lg w-80 transition-transform duration-300 hover:scale-105">
      {/* Thumbnail */}
      <img
        className="w-full h-40 object-cover"
        src={url}
        alt="Video Thumbnail"
      />

      {/* Video Info */}
      <div className="p-4">
        <h2 className="font-bold text-lg text-gray-900 mb-2 truncate">
          {title}
        </h2>
        <h4 className="text-gray-600 text-sm mb-1">{channelTitle}</h4>

        <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
          <span>{Number(viewCount).toLocaleString()} views</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
