import logo from './logo.svg';
import './App.css';
//useEffect hook so everyone can listen 
import React, { useState, useEffect} from 'react';
import io from "socket.io-client"
import audioFile from "./test_audio.mp3"


const socket = io.connect('http://localhost:3001');

const audio = new Audio();





function App() {
  //Variables for either the server or the client
  const [role, setRole] = useState('');

  //Variable for user feedback
  const [playing, setPlaying] = useState('')


  useEffect(() => {
    function receiveMessage(m) {
      console.log(m);
      if(role == 'server') {
        audio.src=m.path;
        audio.play();
      }
      setPlaying(m.name)
    }
    function stopAudio() {
      setPlaying('')
    }

    socket.on('play',receiveMessage);
    socket.on('stop', stopAudio);

// Clean up
    return () => {
      socket.off('play',receiveMessage);
      socket.off('stop', stopAudio);
    }
//The dependency array basically tells the hook to "only trigger when the dependency array changes
//role is a dependency array
  }, [role]);

  useEffect (() => {
    function handleAudioStop(){
      socket.emit('stop');
    }
    audio.addEventListener("pause", handleAudioStop);

    return () => {
    audio.removeEventListener("pause", handleAudioStop);
  
    }

  }, [])
  function handlePlaySound() {
    socket.emit('play', {name: 'The Song Requested By Client', path: audioFile})
  }
  function handleStopSound() {
    audio.pause();
    socket.emit('Stop', {name: 'The Song Requested By Client was stopped', path: audioFile})
  }


  return (
    <div className="App">
      <h1>Sound Player</h1>
      <div>
        <h4>Role</h4>
        <button onClick={()=> setRole("client")} class = "btn">Client</button>
        <button onClick={() => setRole('server')}class = "btn">Server</button>

      </div>
      <div>
        <h4>Audio Player</h4>
        <button onClick={handlePlaySound}class = "btn">Play Sound</button>
        <button onClick={handleStopSound}class = "btn">StopSound</button>

      </div>
      <div>
        <h4>Playing {playing}</h4>
      </div>
    </div>
  );
}

export default App;
