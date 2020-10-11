import React from 'react'
import PropTypes from 'prop-types'

function BackVideo(props) {
  const defaultURL =
    'https://player.vimeo.com/external/278832097.sd.mp4?s=e167c62d88a2b11d34347c7242c4c196f8ee31a4&profile_id=164'

  return (
    <div id="video-bg">
      <video
        preload="auto"
        autoPlay="autoplay"
        loop="loop"
        src={props.videoURL || defaultURL}
        muted
      ></video>
    </div>
  )
}

BackVideo.propTypes = {
  videoURL: PropTypes.string.isRequired,
}

export default BackVideo
