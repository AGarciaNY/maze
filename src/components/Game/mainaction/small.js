import React,{Component} from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled'

const Image = styled.img`
        height:30px;
        width:20px;
`;

const Holder= styled.div`
  height:50px;
  width:50px;
  background-color:red;
  border:2px solid black;
`;

 export default class Smallship extends Component{

  constructor() {
    super();
    this.state = {
      ifvisible: 'hidden',
    }
  }
  colorchange=()=>{
    if(this.state.ifvisible === "hidden"){
      
    this.setState({
      ifvisible: 'visible'
    });
    } else if(this.state.ifvisible === "visible" ){
      
      this.setState({
      ifvisible: 'hidden'
    });
    }
    console.log(this.state.ifvisible)
  }
  render(){
    return(
      <Holder
        onClick={()=> this.colorchange()}
      >
        <Image
          style={{visibility:this.state.ifvisible}}
          alt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
        />
      </Holder>
    );
  }
 }