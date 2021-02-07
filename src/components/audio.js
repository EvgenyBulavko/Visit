import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Player extends React.Component {

  
  
    
  
    render () {
      const src = "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3";
  
      return (
        <AudioPlayer
          src={src}
          //autoPlayAfterSrcChange={false}
          showJumpControls={false}
          showDownloadProgress = {true}
          showFilledVolume={true}
          customProgressBarSection = {[]}
          customAdditionalControls={[]}
         layout="horizontal-reverse"
          autoPlay = {true}
          loop = {true}

        />
      )
    }
  }
  
  export default Player;