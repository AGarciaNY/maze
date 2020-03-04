import React,{Component} from 'react';
import styled from '@emotion/styled';


const Button = styled.button`
  font-size:20px;
  margin:0 100px 0;
`;
const Buttonholder = styled.div`
  font-size:20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Titile =  styled.p`
  font-size:30px;
`;
export default class Selctplayer extends Component{
  render(){
    return(
      <div>
        <Titile>Hi selct your player</Titile>
        <Buttonholder>
          <Button onClick={()=> this.props.pickingplayer('playerone')}>PlayerOne</Button>
          <Button onClick={()=> this.props.pickingplayer('playertwo')}>PlayerTwo</Button>
        </Buttonholder>
      </div>
    );
  } 
 }