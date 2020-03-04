import React,{Component} from 'react';
import styled from '@emotion/styled';
import Map from '../../Game/mainaction/map';

export default class Playertwo extends Component{
  render(){
    return(
      <div>
        <Map player={this.props.player}/>
      </div>
    );
  } 
 }