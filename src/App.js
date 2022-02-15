import logo from './logo.svg';
import './App.css';
// Using UseEffect Hook
import React, { useState, useEffect} from 'react';
//Setting up the client IO
import io from "socket.io-client"
//Getting the file path using audioFile for play and pause
import audioFile from "./test_audio.mp3"

//Connecting the socket
const socket = io.connect('http://localhost:3001');
//Initialising the Audio setup
const audio = new Audio();





function App() {
  //Variables for either the server or the client
  const [role, setRole] = useState('');

  //Variable for user feedback
  const [playing, setPlaying] = useState('')


  useEffect(() => {
    //If socket is active it will receive message of play from the user
    function receiveMessage(m) {
      console.log(m);
      /*
      Run this code if you want to have just the server be a media player that takes client requests and has stopping control
      if(role == 'server') {
        audio.src=m.path;
        audio.play();
      }
      */

      if(role == 'server'||'client') {
        audio.src=m.path;
        audio.play();
      }
      //SetPlaying will give the string to let you know
      setPlaying(m.name)
    }
    function stopAudio() {
      setPlaying('')
    }

    //Using socket.on to connect the play message and audio path information
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

// The audio stop functionality is broken
//To Do: better messaging to the server
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
