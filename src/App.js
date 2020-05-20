import React from 'react';
import './App.css';
import MusicList from './MusicList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 > Reactive Player </h1>
      </header>
        <MusicList  name="Mark"/>
    </div>
  );
}

export default App;
