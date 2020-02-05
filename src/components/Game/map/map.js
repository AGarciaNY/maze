import React,{Component} from 'react';
import styled from '@emotion/styled';


const Box = styled.div`
  display: flex;
  flex-direction: row;
  position:relative;
`;
const Maps = styled.table`
  position:relative;  
  top:0px;
`;
const NumberHoleder= styled.div`
  position:relative;  
  top:0px;
`;
const NUMbers =styled.table`
 padding: 0;
 height:10;
`;
const NUMberstwo =styled.th`
 padding: 0;
 height:10;
`;
export default class Map extends Component{
  constructor() {
    super();
    this.state = {
      pickapage: 'test',
    }
  }
  Clickhere(id){
    console.log(id);
   
 }
  render(){
  let num2=[];
  let namesLiList15 = [];
  let namesLiList14 = [];
  let namesLiList13 = [];
  let namesLiList12 = [];
  let namesLiList11 = [];
  let namesLiList10 = [];
  let namesLiList9 = [];
  let namesLiList8 = [];
  let namesLiList7 = [];
  let namesLiList6 = [];
  let namesLiList5 = [];
  let namesLiList4 = [];
  let namesLiList3 = [];
  let namesLiList2 = []; 
  let namesLiList = [<tr>{namesLiList2}</tr>,
                     <tr>{namesLiList3}</tr>,
                     <tr>{namesLiList4}</tr>,
                     <tr>{namesLiList5}</tr>,
                     <tr>{namesLiList6}</tr>,
                     <tr>{namesLiList7}</tr>,
                     <tr>{namesLiList8}</tr>,
                     <tr>{namesLiList9}</tr>,
                     <tr>{namesLiList10}</tr>,
                     <tr>{namesLiList11}</tr>,
                     <tr>{namesLiList12}</tr>,
                     <tr>{namesLiList13}</tr>,
                     <tr>{namesLiList14}</tr>,
                     <tr>{namesLiList15}</tr>];
  var num = Array(196).fill(true).map((each,i)=> i+1 );
  console.log(num.length);
  for(var i=0; i<num.length;i++){
    if(i<14){
      namesLiList2.push(
          <th id ={i}>{i+1}</th>

      );
    }
    if(i<15){
      num2.push(
        <NUMbers>
          <NUMberstwo id ={i}>{i}</NUMberstwo>

          </NUMbers>
      );
    }
    if(i>13 && i<28){
      namesLiList3.push(
        <th Clickhere id={i}>{i+1}</th>
      );
    }
    if(i>27 && i<42){
      namesLiList4.push(
        <th id ={i}>{i+1}</th>
      );
    }
    if(i>41 && i<56 ){
      namesLiList5.push(
        <th id ={i}>{i+1}</th>
      );
    }
    if(i>55 && i<70){
      namesLiList6.push(
        <th id ={i}>{i+1}</th>
      );
    }
    if(i>69 && i<84){
      namesLiList7.push(
        <th id ={i}>{i+1}</th>
      );
    }
    if(i>83 && i<98){
      namesLiList8.push(
        <th id ={i}>{i+1}</th>
      );
    }
    if(i>97 && i<112){
      namesLiList9.push(
        <th id ={i}>{i+1}</th>
      );
    }
    if(i>111 && i<126){
      namesLiList10.push(
        <th id ={i}>{i+1}</th>
      );
    }
    if(i>125 && i<140){
      namesLiList11.push(
        <th id ={i}>{i+1}</th>
      );
    }
    if(i>139 && i<154){
      namesLiList12.push(
        <th id ={i}>{i+1}</th>
      );
    }
    if(i>153 && i<168){
      namesLiList13.push(
        <th id ={i}>{i+1}</th>
      );
    }
    if(i>167 && i<182){
      namesLiList14.push(
        <th id ={i}>{i+1}</th>
      );
    }
    if(i>181 && i<196){
      namesLiList15.push(
        <th id ={i}>{i+1}</th>
      );
    }
  };
    
    return(
      <Box>
        <NumberHoleder>
        {num2}
        </NumberHoleder>
        <div>
        <Maps Clickhere>
        <tr>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
          <th>F</th>
          <th>G</th>
          <th>H</th>
          <th>I</th>
          <th>J</th>
          <th>K</th>
          <th>L</th>
          <th>M</th>
          <th>N</th>
        </tr>
        {namesLiList}
        </Maps>
        </div>
        
      </Box>
    );
  }
}