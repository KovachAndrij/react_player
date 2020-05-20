import React from 'react';
import './MusicButtons.css';
import ReactAudioPlayer from 'react-audio-player';

class MusicButtons extends React.Component{
    render() {
        return (
            <div>
                <ReactAudioPlayer
                    src="./music/billie_eilish.mp3"
                    controls
                />
                <button id='deleteBtn' >Delete</button>
            </div>
        );
    }
}

export default MusicButtons;
