import React, { Component } from 'react';
import styled from '@emotion/styled';
import firebase from'firebase';

export default class Servergo extends Component{
 
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
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var dataforme= firebase.database();
    var databaseRef = dataforme.ref("/");
    var holder;
    var server=[];
    databaseRef.once("value").then(function(snapshot) {
      holder = snapshot.val();
      
      for(var key in holder){
        let servername=holder[key].server1.servername;
        console.log(servername);
        console.log("hi there man");
        server.push(
        <div>
          <p>{servername}himan</p>
        </div>
        );
      }
    });

    const attck = () => {
      console.log(server);
      databaseRef.push({
        server1:{
          servername:"names",
          player1:{
              name:"names",
              locationofships:[],
              ships:{},
              shipsleft:"sanodnoaindo ",
              playeronemap:"maspmdopasmpod",
              playertwomap:"mdasmdpooamsd"
          },
          player2:{
              name:"",
              locationofships:"dd",
              ships:{},
              shipsleft:"maposdmpoasmd",
              playeronemap:"mamsdomaspodm",
              playertwomap:"mapsomdpoasmpod"
          }
        }
      })
    }
  



    return(
      <div>
    <div onClick={attck}>hi there</div>
    {server}
    </div>
    );




  }
}