import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Cell extends React.Component{
  constructor(props){
    super(props);
    this.startGame = this.startGame.bind(this);
    this.getKeyDirection = this.getKeyDirection.bind(this);
    this.foodPosition = 50;
    this.state = { color : 'white', snakeHead: 0, direction: ''};
  }
  getKeyDirection(event){
     switch(event.keyCode){
        case 37:
          this.setState({direction :'left',
          snakeHead: this.state.snakeHead-1});
          break;
        case 38:
          this.setState({direction :'up',});
          break;
        case 39:
          this.setState({direction :'right',
          snakeHead: this.state.snakeHead+1});
          break;
        case 40:
          this.setState({direction :'down'});
          break;
      }
  }

  startGame(){
    console.log(this.state,"This is my state in startgame");
    window.setInterval(() =>{
      if (this.state.snakeHead < 99) {
        this.setState({snakeHead: this.state.snakeHead+1});
        window.addEventListener("keydown",this.getKeyDirection , false);
      } else {
        this.setState({snakeHead: 0});
      }
      if (this.state.snakeHead === this.foodPosition) {
        return 'Snake have eaten the food';
      }
    },500);
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
