import React from 'react';
import './SongsTable.css';
import Music from './Music';

class SongsTable extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            songs: [
                { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
                { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
                { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
                { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
            ],
            colomnNames: [ 'Song Name', 'Actions']
        }
    }

    renderTableData() {
        return this.state.songs.map((song, index) => {
            const { id, name, age, email } = song
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = this.state.colomnNames
        console.log(header);
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
                <Music/>
            </div>
        )
    }

}

export default SongsTable;
