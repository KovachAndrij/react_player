import React from 'react';
import './SongsTable.css';
import MusicButtons from './MusicButtons';
import Popup from './Popup';

class SongsTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            songs: [
                {   name: 'Sample Song',
                    actor: 'me',
                    songUrl:'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'
                },
            ],
            colomnNames: [ 'Song Name','Actor', 'Actions'],
           showPopup: false
    }
    }
    handleTogglePopup = (song) => {
        let newStateSongs =[...this.state.songs];
        newStateSongs.push(song);
        this.setState({
            showPopup: !this.state.showPopup,
            songs: newStateSongs
        });
    };
    openTogglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    };

    deleteSongHandler = (deleteSongName) => {
        this.setState({
            songs: this.state.songs.filter(item => item.name !== deleteSongName)
        })
    };

    renderTableData() {
        return this.state.songs.map((song) => {
            return (
                <tr key={song.name}>
                    <td>{song.name}</td>
                    <td>{song.actor}</td>
                    <td><MusicButtons name={song.name}  songUrl={song.songUrl} deleteSongHandler={this.deleteSongHandler} /> </td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = this.state.colomnNames;
        return header.map((colomnName, index) => {
            return <th key={index}>{colomnName.toUpperCase()}</th>
        })
    }


    render() {
        return (
            <div>
                <table id='songsTable'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    <tr id='addSongRow'>
                        <td colSpan={3}> <button id='addSongBtn' onClick={this.openTogglePopup}> Add Song</button>

                            {this.state.showPopup ?
                                <Popup
                                    text='Enter the song name and actor'
                                    closePopup={this.handleTogglePopup}
                                />
                                : null
                            }</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SongsTable;
