import React from 'react';
import Servers from './components/Servers/server';
import firebase from 'firebase';
import Shiplist from './components/Game/mainaction/ship';

function App() {
  var firebaseConfig = {
    apiKey: "AIzaSyCpgbWv2hBCybjuyMu0hzKKkF5ytRWxRS8",
    authDomain: "maze-b843f.firebaseapp.com",
    databaseURL: "https://maze-b843f.firebaseio.com",
    projectId: "maze-b843f",
    storageBucket: "maze-b843f.appspot.com",
    messagingSenderId: "59745990940",
    appId: "1:59745990940:web:15ffae503916de3e7262d9",
    measurementId: "G-KL4SQZ93SK"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var database = firebase.database();
  return (
    <div>
      <h1>BATTEL SHIP</h1>
        <h1>Servers</h1>
        <Servers
        databaseRef ={database.ref("/")}
        />
        <Shiplist/>
    </div>
  );
}

export default App;
