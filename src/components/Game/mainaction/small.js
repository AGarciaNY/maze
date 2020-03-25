import React,{Component} from 'react';
import styled from '@emotion/styled';
const Image = styled.img`
        height:50px;
        width:50px;
`;

const Holder= styled.div`
  height:50px;
  width: 50px;
  background-color:red;
  border:2px solid black;
`;
var p2s=0;
export default class Box extends Component{

  constructor() {
    super();
    this.state = { 
      ifvisible: 'hidden',
      p1numberofship:'',
      p2numberofship:''
    }
  }
  p1action=()=>{
    if(this.state.ifvisible === "hidden"){
      
      this.setState({
        ifvisible: 'visible',
        p1numberofship:+1
      });
    } else if(this.state.ifvisible === "visible" ){
      
      this.setState({
        ifvisible: 'hidden',
        p1numberofship:-1
      });
    }
  }
  p2action=()=>{
  
    if(this.state.ifvisible === "hidden" && this.state.p2numberofship < 15){
      p2s = p2s +1
      this.setState({
        ifvisible: 'visible',
        p2numberofship: p2s
      });
      console.log(p2s)
      console.log(this.state.p2numberofship)
    } else if(this.state.ifvisible === "visible" ){
      
      this.setState({
        ifvisible: 'hidden',
        p2numberofship:-1
      });
    }
  }
  render(){
    if(this.props.player === "playerone"){
      
      return(
        <Holder
          onClick={() => {
              this.p1action();
            }
          }
        >
          <Image
            style={{visibility:this.state.ifvisible}}
            alt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
          />
        </Holder>
      );
    } else if(this.props.player === "playertwo"){
      return(
        <Holder
          onClick={() => {
              this.p2action();
            }
          }
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
}