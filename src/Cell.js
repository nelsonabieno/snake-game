import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Cell extends React.Component{
  constructor(props){
    super(props);
    this.foodPosition = 50;
    this.state = { color : 'white', snakeHead: 0};
    this.startGame = this.startGame.bind(this);
  }
  startGame(){
    window.setInterval(() =>{
    if (this.state.snakeHead < 99) {
      this.setState({snakeHead: this.state.snakeHead+1});
      return 'this is my snakehead';
    } else {
      this.setState({snakeHead: 0});
    }
    if (this.state.snakeHead === this.foodPosition) {
      return 'Snake have eaten the food';
    }},500);
    this.setState({color: 'purple'});
  }
  render(){
    let boxes=this.props.units;
    return (
      <div>
      { boxes.map((box,index)=>{
          if (index === this.foodPosition){
            return  <div className="col s2 gameCell red darken-1" key={index} id={'cellId'+index}> {index} </div>
          }
          else if (index === this.state.snakeHead){
            return  <div className="col s2 gameCell light-blue darken-4" key={index} id={'cellId'+index}> {index} </div>
          }
          else {
            return  <div className="col s2 gameCell teal lighten-3" key={index} id={'cellId'+index}> {index} </div>
          }
      })
      }
      <a className="cyan darken-4 waves-effect waves-light board startBtn" onClick={this.startGame}>START</a>
      </div>
    );
  }
}

export default Cell;
