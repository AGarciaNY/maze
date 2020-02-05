import React,{Component} from 'react';
import styled from "@emotion/styled";
import Ships from './ship';
const Box = styled.div`
  height:50px;
  width:50px;

`;



let clicks=1;

export default class Shipbox extends Component{
  constructor() {
    super();
    this.state = {
      nuumbersofships: 0,
      visibility: false
    }
  }
  // ships=()=>{
  //   if (clicks<5){
  //     clicks=clicks+1;

  //     if(clicks){}
  //       this.setState({
  //       nuumbersofships: clicks,
  //       visibility: true
  //     });

  //     console.log(clicks+"its not  stoping");

  //   }else{
  //     console.log("it stoped");

  //   }
  // }

  render(){
    const Image =styled.img`
      visibility: ${this.state.visibility };
    `;
    return(
      <Box onClick={this.ships}>
      {/* <Image visibility="false"
        alt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
      /> */}
      <Ships/>
      </Box>
    );
  }
}