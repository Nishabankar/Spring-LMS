import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {


  return (
    <div className="w-full max-w-[1595px] aspect-video mx-auto rounded-2xl overflow-hidden shadow-lg border border-white-90 bg-black">
      <ReactPlayer
        src="assets/video/videoplayback.mp4"
        width="100%"
        height="100%"
        controls={true}
        playing="false"
        preload="true"
        muted={true}
        loop={true}

      />
    </div>
  );
};

export default VideoPlayer;
