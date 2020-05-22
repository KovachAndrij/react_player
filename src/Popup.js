import React from 'react';
import './Popup.css';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeSongName = this.handleChangeSongName.bind(this);
        this.handleChangeSongActor = this.handleChangeSongActor.bind(this);
    }
    song = {name: '', actor:'', songUrl:''};

    handleChangeSongName( song ) {
        this.song.name = song;
    }
    handleChangeSongActor(actor) {
        this.song.actor = actor;
    }
    handleClosePopUp = () => {
        this.props.closePopup(this.song);
    };

    render() {
        return (
            <div className='popup'>
                <div className='popupInner'>
                    <h1>{this.props.text}</h1>
                    <form className='songForm'>
                        <div>
                            <label> Enter song name:</label>
                            <input type="text" onChange={e => this.handleChangeSongName(e.target.value)}/>
                        </div>
                        <div>
                            <label> Enter song actor:</label>
                            <input type="text" onChange={e => this.handleChangeSongActor(e.target.value)}/>
                        </div>
                    </form>
                    <button  className='popupSubmitBtn' onClick={this.handleClosePopUp}> Submit </button>
                </div>
            </div>
        );
    }
}

export default Popup;
