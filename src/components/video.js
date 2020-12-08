import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video" display="block" width="100%">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      height="625"
      margin="auto"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video
