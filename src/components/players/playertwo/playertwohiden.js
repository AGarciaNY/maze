import React,{Component} from 'react';
import styled from '@emotion/styled';
import Map from '../../Game/mainaction/map';

const PlayerGrid = styled.div`
    width: 100%;
`;

export default class Playertwohiden extends Component{
  constructor() {
    super();
    this.state = {
      shiplocation: new Array(100).fill(false) ,
    }
  }
  componentDidMount(){
    this.props.databaseRefp2.on('value',snapshot =>{ 
      console.log(`hi this playertwo${JSON.stringify(snapshot)}`)

      let newshiplocation=[];
      Object.values(snapshot.val()).forEach(value=>{newshiplocation.push(value)});

      this.setState({
      shiplocation: newshiplocation,
       })
    })

  }

  render(){
    return(
      <PlayerGrid>
        <h1>Player 2 Hidden</h1>
        <Map
          player={"one"}
          SL={this.state.shiplocation}
          // newlocation={}
        />
      </PlayerGrid>
    );
  } 
 }