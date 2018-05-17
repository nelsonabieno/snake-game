import React from 'react';
import Box from './Box';

const Grid = (prop)=>{
  // console.log(prop.snake, "this is my prop");
  const grid = [];
  let color;
  for (let i =0; i< 100 ; i++) {
    if (prop.snake.indexOf(i) > -1){
      color = 'light-blue darken-4';
    } else if (prop.food === i) {
      color = 'red darken-1';
    } else {
      color = 'teal lighten-3';
    }
    grid.push(<Box color={color} key={i} />);
  }
 // console.log(grid,"grid");
  return (<div>{grid}</div>);
}

export default Grid;