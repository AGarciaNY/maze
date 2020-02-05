import React, { Component } from 'react';
import styled from '@emotion/styled';

const Ship=styled.div`
  height:30px;
  width:20px;
  background-color:red;
`;

export default class Ships extends Component{
  
  render(){
    var namesLiList2=[];


    for(let i=0; i<12;i++){

      let visibilitytakeone='hidden';
      const Image = styled.img`
        height:30px;
        width:20px;
        visibility:${visibilitytakeone};
      `;


      const action=()=>{
        if(visibilitytakeone === "hidden"){
          visibilitytakeone="visible"; 
          console.log(visibilitytakeone);
        } else if(visibilitytakeone === "visible" ){
          visibilitytakeone="hidden";
          console.log(visibilitytakeone);
        }
      }


      

      namesLiList2.push(
          <div
          key={i+"hitheremans"} >
            
            <Ship 
              key={i+"hithere"}
              onClick={()=> action()}
              >
              <Image
                whatsgoingon={visibilitytakeone}
                key={i+"box"}
                alt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQU9Vb5tYWn6R6moUuhXJqIRJMOedsRdmNUkDn2XOi3y5QFZz9"
              />
            </Ship>
          </div>
        );
     
    }

    return(
      <div>
        {namesLiList2}
      </div>
    );
  }
}
