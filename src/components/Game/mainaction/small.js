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

var numberofship=0;

export default class Box extends Component{

  constructor() {
    super();
    this.state = { 
      ifvisible: 'hidden',
      
    }
  }
  colorchange=()=>{
    if(this.state.ifvisible === "hidden"){
  
      this.setState({
        ifvisible: 'visible',
      });
    } else if(this.state.ifvisible === "visible" ){
      
      this.setState({
        ifvisible: 'hidden',
      });
    }
  }

  numberofships=()=>{
    if(this.state.ifvisible === "hidden"){
      numberofship=numberofship+1
     
    } else if(this.state.ifvisible === "visible" ){
      numberofship=numberofship-1
    }
    
  }
  
  render(){
    if(this.props.player === "playerone"){
      let positions=[];
      for(var i=0; i < positions.length; i++){

        if (pos === positions[i]){
          delete positions[i];
        }else{
          positions.push(pos);
          console.log('should push')
        }
      }
      console.log(positions)
      return(
        <Holder
          onClick={() => {
              this.colorchange();
              this.numberofships();
              this.position(this.props.pos);

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
      let positions=[];
      return(
        <Holder
          onClick={() => {
              this.colorchange();
              this.numberofships();
              this.position(this.props.pos);

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