import React,{Component} from 'react';
import styled from '@emotion/styled';
import Map from '../../Game/mainaction/map';
import Playeronehiden from './playeronehiden'

const Holder = styled.div`
  display: flex;
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
      <div>
        <Holder>
        <Map
          player={this.props.player}
          SL={this.state.shiplocation}
          newlocation={this.updateShipLocation}
        />
        </Holder>
        
        <button onClick={()=> this.props.pushingdata(this.state.shiplocation)}>spots</button>
      </div>
    );
  } 
 }