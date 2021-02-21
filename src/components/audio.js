import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Player extends React.Component {

  
  
    
  
    render () {
      const src = "https://data.ipleer.com/file/182782597/YlpobmQ4WDBpcDFJVTZPSGdOMkg5Z0pMWjEzK1l0SkJtOG1jOGErc2VqMjRiN09nc1gwUnc4OEphRDV3cjY2RHIrLzFMc2F0ZitOL1BWSXlXV3J0YS9qUFVkOVlML09hNlJFcDM0RmtvZG1uSkt4SkdVcmVRQU85eURkUjNXVDI/Fonzi_M_-_This_Game_From_No_Game_No_Life_Opening_Piano_Solo_(iPleer.com).mp3";
  
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