import React,{Component} from 'react';
const Numbers=()=>{
 return( Array(14).fill(true).map((each,i)=> i+1 ).map(each => <tr>{each}</tr>)
 );
};

export default class Map extends Component{
  render(){
    
    return(
    <div>
      <table >
        <tr>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
          <th>F</th>
          <th>G</th>
          <th>H</th>
          <th>J</th>
          <th>K</th>
          <th>L</th>
          <th>M</th>
          <th>N</th>
          <th>O</th>
        </tr>
        <Numbers/>
      </table>
      
      </div>
    );

    
  }
}