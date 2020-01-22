import React from 'react';
import firebase from 'firebase';
import Map from './components/map/map';


function App() {
// console.log(firebase.batabase);
  
    // Your web app's Firebase configuration
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
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var dataforme= firebase.database();
    var databaseRef = dataforme.ref("/");
    databaseRef.once("value").then(function(snapshot) {
      const directory = snapshot.val();
      console.log(directory)
    });

    const attck = () => {
      databaseRef.push({
        age:"20",
        country:"30",
        story:"40",
        title:"30"
      })
    }
      
        return (
          <div>
              <button onClick={attck}> attck</button>
              <Map/>
          </div>
        );
}

export default App;
