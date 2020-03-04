import React,{Component} from 'react';
//import styled from '@emotion/styled';
import Shiplist from '../../Game/mainaction/ship'

export default class Playerone extends Component{
  render(){
    return(
      <div>
        <Shiplist
          player='playerone'
        />
      </div>
    );
  } 
 }