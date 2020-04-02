import React,{Component} from 'react';
import Map from '../../Game/mainaction/map';
import styled from "@emotion/styled";

const PlayerGrid = styled.div`
    width: 100%;
`;

export default class Playerone extends Component{
  constructor() {
    super();
    this.state = {
      shiplocation:new Array(100).fill(false),
    }
    this.updateShipLocation=(index)=>{
      let newshiplocation=this.state.shiplocation;
      newshiplocation[index]=!newshiplocation[index];

      this.setState({
        shiplocation:newshiplocation
      })
    }
  }
  render(){
    return(
      <PlayerGrid>
        <div>
        <h1>Player 1</h1>
        <Map
          player={this.props.player}
          SL={this.state.shiplocation}
          newlocation={this.updateShipLocation}
        />
        </div>
        
        <button onClick={()=> this.props.pushingdata(this.state.shiplocation)}>spots</button>
      </PlayerGrid>
    );
  } 
 }