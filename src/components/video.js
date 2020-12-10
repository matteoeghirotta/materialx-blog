import React from 'react'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div
    class="videoWrapper"
    sx={{
      position: 'relative',
      paddingBottom: '56.25%',
      height: '0'
    }}
  >
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      margin="auto"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      position="absolute"
      top="0"
      left="0"
      width="560"
      height="315"
    />
  </div>
)

export default Video
