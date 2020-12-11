import React from 'react'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div
    className="videoWrapper"
    // style={{ '--aspect-ratio': 3 / 4 }}
    sx={{
      position: 'relative',
      // paddingBottom: 'calc(var(--aspect-ratio, .5625) * 100%)',
      paddingBottom: '56.25%',
      height: '0'
    }}
  >
    <iframe
      width="560"
      height="315"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
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
    />
  </div>
)

export default Video
