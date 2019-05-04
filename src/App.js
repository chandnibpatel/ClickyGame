import React, { Component } from "react";
import Wrapper from "./components/wrapper/Index";
import Header from "./components/header";
import Card from "./components/card"
import images from "./images.json";

import './App.css';
class App extends Component{

  state={
    images,
    score:0,
    highScore:0
  };
  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(images[i].count === 0){
          images[i].count = images[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore}>Clicky Game</Header>

         {this.state.images.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          /> 
        ))}
      </Wrapper>
    );
  }
}


export default App;
