import React,{Component} from 'react';
import styled from '@emotion/styled';

import Box from './small'

const Row = styled.div`
  width:100px;
  background-color:blue;  
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto ;
  grid-column-gap: 0;
  grid-row-gap: 0;
`;

export default class Map extends Component{
  render(){
      
      let namesLiList = this.props.SL.map((value, index)=>{return (
        <Box  
          player={this.props.player} 
          visable={value}
          update={()=> this.props.newlocation(index)}
        /> 
        )} 
       );


      return(
        <Row>
          {namesLiList}
        </Row>
      )
  }
}