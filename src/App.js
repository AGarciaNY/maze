import React,{Component} from 'react';
import styled from '@emotion/styled';

import Servers from './components/Servers/server';
import firebase from 'firebase';
import Playerone from './components/players/playerone/index';
import Playertwo from './components/players/playertwo/index';
import Playeronehiden from './components/players/playerone/playeronehiden';
import Playertwohiden from './components/players/playertwo/playertwohiden';
import Selctplayer from './components/players/seletingplayer';
import Scorebord from './components/Game/score/score';
import Map from './components/Game/mainaction/map'

const PlayerView = styled.div`
  display: flex;
`;


export default class App extends Component{
  constructor() {
    super();
    this.state = {
      playerpick: '',
    }
  }
  pickAplayer=(player)=>{
    this.setState({
      playerpick: player
    });
  }

  render(){

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

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    // firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    var database = firebase.database();
    var databaseRefp1 = database.ref("/playerone");
    var databaseRefp2 = database.ref("/playertwo");
    
    
    if(this.state.playerpick === "playerone"){
      return(
        <PlayerView>
          {/*<Scorebord/>*/}
          <Playerone
            player='playerone'
            // databaseRef ={ database.ref("/")}
            pushingdata={(array)=>{databaseRefp1.set(array)}}
            />
          <Playertwohiden databaseRefp2={databaseRefp2}/>
          
        </PlayerView>
      )
    }else if(this.state.playerpick === "playertwo"){
      return(
        <PlayerView>
          {/*<Scorebord />*/}
          <Playertwo 
            player='playertwo'
            pushingdata={(array)=>{databaseRefp2.set(array)}}
          />
          <Playeronehiden/>
        </PlayerView>
      );
    }else{
      return(
        <div>
          <Selctplayer
            pickingplayer={(player)=> this.pickAplayer(player)}
            />
            {/* <Map/> */}
        </div>
      )
    };
    
  }
}

// return (
//   <div>
//     <h1>BATTEL SHIP</h1>
//       <h1>Servers</h1>
//       <Servers
//       databaseRef ={database.ref("/")}
//       />
//       <Playerone/>
//   </div>
// );