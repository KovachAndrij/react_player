import React from 'react';
import './MusicList.css';
import SongsTable from './SongsTable';

class MusicList extends React.Component{
    render() {
        return (
            <div className="MusicList">
                <h1>List of songs</h1>
               <SongsTable/>
            </div>
        );
    }
}

export default MusicList;
