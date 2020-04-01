import React,{Component} from 'react';
//import styled from '@emotion/styled';
import Map from '../../Game/mainaction/map';

export default class Playeronehiden extends Component{
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
      <div>
        <Map
          player={"one"}
          SL={new Array(100).fill(false)}
          // newlocation={}
        />
      </div>
    );
  } 
 }