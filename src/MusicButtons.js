import React from 'react';
import './MusicButtons.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


class MusicButtons extends React.Component{

    render() {
        return (
            <div className='musicButtonsDiv'>
                <div className='playerWrapper'>
                <AudioPlayer src={this.props.songUrl}/>
                </div>
                <div className='deleteBtnWrapper'>
                <button id='deleteBtn' onClick={() => { this.props.deleteSongHandler(this.props.name)}}>Delete</button>
                </div>
            </div>
        );
    }
}


export default MusicButtons;
