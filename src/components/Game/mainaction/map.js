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
      if(this.props.player === 'playerone'){
      let namesLiList = [];
      for(let i=0; i<100;i++){
        
          namesLiList.push(
            <Box 
              playerone={'playeroneposition'+i}
              player={this.props.player}
              
            />
        );
      
      }
      return(
        <Row>
          {namesLiList}
        </Row>
      )
    }

    if(this.props.player === 'playertwo'){
      let namesLiList = [];
      for(let i=0; i<100;i++){
        
          namesLiList.push(
            <Box 
            pos={'playertwoposition'+i}
            player={this.props.player}/>
        );
      
      }
      return(
        <Row>
          {namesLiList}
        </Row>
      )
    }
  }
}