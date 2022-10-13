import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [playing, setPlaying] = useState(false);

  const handlePlayer = (action) => {
    const player = document.getElementById('player');
    if (action === 'play') {
      setPlaying(true);
      player.play();
    }
    if (action === 'pause') {
      setPlaying(false);
      player.pause();
    }
  }

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={'http://www.enterprisesolutions.com.py/assets/img/profile.png'} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>VentuRadio - Enterprise DEMO</h1>
      <div className="card">
        <audio id='player'>
          <source src="http://radio.hostingparaguay.net:8015/stream" type="audio/aac"></source>
        </audio>
        <p>
          {playing && 'Reproduciendo'}
          {!playing && 'No reproduciendo'}
        </p>
        <button style={{ marginRight: '3rem' }} onClick={() => handlePlayer('play')}>
          Play
        </button>
        <button onClick={() => handlePlayer('pause')}>
          Pause
        </button>


      </div>
    </div>
  )
}

export default App
