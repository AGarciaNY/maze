import React, { Component } from 'react';
import styled from '@emotion/styled';
import Smallship from './small'

const Holder =styled.div`
  display: flex;
  flex-direction: row;
`;


export default class Shiplist extends Component{
  
  render(){

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
    let namesLiList = [<Holder>{namesLiList2}</Holder>,
                       <Holder>{namesLiList3}</Holder>,
                       <Holder>{namesLiList4}</Holder>,
                       <Holder>{namesLiList5}</Holder>,
                       <Holder>{namesLiList6}</Holder>,
                       <Holder>{namesLiList7}</Holder>,
                       <Holder>{namesLiList8}</Holder>,
                       <Holder>{namesLiList9}</Holder>,
                       <Holder>{namesLiList10}</Holder>,
                       <Holder>{namesLiList11}</Holder>
                      ];
    for(let i=0; i<100;i++){
      
    if(i<10){
      namesLiList2.push(
        <Smallship/>
    );
    }
    if(i>9 && i<20){
      namesLiList3.push(
        <Smallship/>
      );
    }
    if(i>19 && i<30){
      namesLiList4.push(
        <Smallship/>
      );
    }
    if(i>29 && i<40 ){
      namesLiList5.push(
        <Smallship/>
      );
    }
    if(i>39 && i<50){
      namesLiList6.push(
        <Smallship/>
      );
    }
    if(i>49 && i<60){
      namesLiList7.push(
        <Smallship/>
      );
    }
    if(i>59 && i<70){
      namesLiList8.push(
        <Smallship/>
      );
    }
    if(i>69 && i<80){
      namesLiList9.push(
        <Smallship/>
      );
    }
    if(i>79 && i<90){
      namesLiList10.push(
        <Smallship/>
      );
    }
    if(i>89 && i<101){
      namesLiList11.push(
        <Smallship/>
      );
    }
     
    }

    return(
      <div>
        {namesLiList}
      </div>
    );
  }
}
