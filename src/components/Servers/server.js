import React, { Component } from 'react';
import styled from '@emotion/styled';
import Testingrenderofnammes from './info';
const Title = styled.h1`
  background-color:red;
  height:30px;
  width:30px;
  font-size:10px;
`;


export default class Servers extends Component {
  constructor() {
    super();
    this.state = {
      titles: [],

    }
  }
  componentDidMount(){
    
    this.props.databaseRef.once("value").then((snapshot)=> {

      var directory = snapshot.val();

      for (var key in directory) {

        let title=directory[key].server1.servername;
        let titles=this.state.titles;
        titles.push(
          title
        );
        this.setState({
          titels: titles,
        });
        

      }


    });
  }

  render() {
    // for(var i=0;i< this.state.titles.length ;i++){
    // console.log(this.state.titles[i]);
    // }
  return this.state.titles.map(title=> <div>{title}</div>)
    // runlist.push(
    //   <div>
    //     <h1>hi sunday{title}</h1>
    //   </div>
    // );





    return (
      <div key="run">
        <Title> hi man</Title>
        {/* <Serverslist/> */}
        {/* {this.state.titles} */}
        <input></input>
      </div>
    );

  }
}