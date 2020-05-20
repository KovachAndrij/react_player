import React from 'react';
import './SongsTable.css';
import MusicButtons from './MusicButtons';

class SongsTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            songs: [
                { name: 'Wasif'},
                { name: 'Ali'},
                { name: 'Saad'},
                { name: 'Asad'}
            ],
            colomnNames: [ 'Song Name', 'Actions']
        }
    }

    renderTableData() {
        return this.state.songs.map((song, index) => {
            const {  name } = song;
            return (
                <tr key={name}>
                    <td>{name}</td>
                    <td><MusicButtons name={name}/> </td>
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
