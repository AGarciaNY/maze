import React,{Component} from 'react';
import styled from "@emotion/styled";
import Ships from './ship';

const Box = styled.div`
  height:50px;
  width:50px;

`;

export default class Shipbox extends Component{
  constructor() {
    super();
    this.state = {
      nuumbersofships: 0,
      visibility: false
    }
  }
  render(){

    return(
      <Box onClick={this.ships}>
      <Ships/>
      </Box>
    );
  }
}