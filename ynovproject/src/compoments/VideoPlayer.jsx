import React from 'react'
import { Player } from 'video-react';
import Header from './Header'

class VideoPlayer extends React.Component {

    render(){

        return(
            
            <div>
              <Header/>
            <Player>
                 <source src="http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4" />
            </Player>
            </div>


        )

    }
}

export default VideoPlayer;