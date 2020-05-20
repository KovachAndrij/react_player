import React from 'react';
import './SongsTable.css';
import MusicButtons from './MusicButtons';

class SongsTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            songs: [
                {  name: 'Sample Song',
                    songUrl:'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'
                },
            ],
            colomnNames: [ 'Song Name', 'Actions'],
        }
    }
    deleteSongHandler = (deleteSongName) => {
        this.setState({
            songs: this.state.songs.filter(item => item.name !== deleteSongName)
        })
    };

    renderTableData() {
        return this.state.songs.map((song, index) => {
            return (
                <tr key={song.name}>
                    <td>{song.name}</td>
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
                    </tbody>
                </table>
            </div>
        )
    }

}

export default SongsTable;
