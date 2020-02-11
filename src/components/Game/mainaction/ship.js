import React, { Component } from 'react';
import styled from '@emotion/styled';
import Smallship from './small'

const Holder =styled.div`
  display: flex;
  flex-direction: row;
`;


export default class Shiplist extends Component{
  constructor() {
    super();
    this.state = {
      numbersofships:0
    }
  }
  numbersOF=(isithov)=>{
    
    if(isithov === "hidden"){
      var num= this.state.numbersofships +1;
      this.setState({
        numbersofships: num
      });
      console.log(this.state.numbersofships);
    } 
    if(isithov === "visible" ){
      var numtwp= this.state.numbersofships -1;
      this.setState({
        numbersofships: numtwp
      });
      console.log(this.state.numbersofships);
    }
    
  }
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
    let namesLiList = [<Holder key='a'>{namesLiList2}</Holder>,
                       <Holder key='w'>{namesLiList3}</Holder>,
                       <Holder key='d'>{namesLiList4}</Holder>,
                       <Holder key='g'>{namesLiList5}</Holder>,
                       <Holder key='v'>{namesLiList6}</Holder>,
                       <Holder key='q'>{namesLiList7}</Holder>,
                       <Holder key='z'>{namesLiList8}</Holder>,
                       <Holder key='x'>{namesLiList9}</Holder>,
                       <Holder key='c'>{namesLiList10}</Holder>,
                       <Holder key='p'>{namesLiList11}</Holder>
                      ];
    for(let i=0; i<100;i++){
      
    if(i<10){
      namesLiList2.push(
        <Smallship 
          key={i} 
          checking={(isit)=> this.numbersOF(isit)}
          />
    );
    }
    if(i>9 && i<20){
      namesLiList3.push(
        <Smallship 
          key={i} 
          checking={(isit)=> this.numbersOF(isit)}
          />
      );
    }
    if(i>19 && i<30){
      namesLiList4.push(
        <Smallship 
          key={i}
          checking={(isit)=> this.numbersOF(isit)}
          />
      );
    }
    if(i>29 && i<40 ){
      namesLiList5.push(
        <Smallship 
          key={i}
          checking={(isit)=> this.numbersOF(isit)}
          />
      );
    }
    if(i>39 && i<50){
      namesLiList6.push(
        <Smallship 
          key={i}
          checking={(isit)=> this.numbersOF(isit)}
          />
      );
    }
    if(i>49 && i<60){
      namesLiList7.push(
        <Smallship 
          key={i}
          checking={(isit)=> this.numbersOF(isit)}
          />
      );
    }
    if(i>59 && i<70){
      namesLiList8.push(
        <Smallship 
          key={i}
          checking={(isit)=> this.numbersOF(isit)}
          />
      );
    }
    if(i>69 && i<80){
      namesLiList9.push(
        <Smallship 
          key={i}
          checking={(isit)=> this.numbersOF(isit)}
          />
      );
    }
    if(i>79 && i<90){
      namesLiList10.push(
        <Smallship 
          key={i}
          checking={(isit)=> this.numbersOF(isit)}
          />
      );
    }
    if(i>89 && i<101){
      namesLiList11.push(
        <Smallship 
          key={i}
          checking={(isit)=> this.numbersOF(isit)}
          />
      );
    }
     
    }

    return(
      <div key="thunder">
        {namesLiList}
      </div>
    );
  }
}
