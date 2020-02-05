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
    var num = Array(12).fill(true).map((each,i)=> i+1 );
    
    for(var i=0; i<num.length;i++){

      let visibilitytakeone='hidden';
      let names=i;
      const action=(i)=>{
        
        visibilitytakeone="visible";
        console.log(visibilitytakeone+i);
        return visibilitytakeone;
      }

      const Image = styled.img`
      height:30px;
      width:20px;
      
    `;

      namesLiList2.push(
        <div >
          <Ship 
            key={i+"hithere"}
            numbername={i}
            onClick={()=> action(names)}
            >
            <Image
              style={{visibility:visibilitytakeone}}
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
