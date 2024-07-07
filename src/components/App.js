import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.keydownHandler = this.keydownHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  keydownHandler(e) {
    if (e.key === "ArrowRight") {
      this.setState(prevState => ({ 
        posi: prevState.posi + 5, 
        ballPosition: { left: prevState.posi + 5 + "px" } 
      }));
    }
  }

  // bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", this.keydownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownHandler);
  }
  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
