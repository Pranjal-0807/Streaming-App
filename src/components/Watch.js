import React from "react";
import { useParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const Watch = () => {
  const { videoId } = useParams();

  return (
    <div className="flex flex-col md:flex-row m-4 p-4">
      <iframe
        width="900"
        height="450"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>
      <div className="pl-2 ml-2 w-full md:w-1/3">
        <LiveChat />
      </div>
    </div>
  );
};

export default Watch;
