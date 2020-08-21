import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
 
import {
  TransitionGroup,
  CSSTransition,
  Transition
} from "react-transition-group";
 
class App extends React.Component {
  render() {
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}
 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateOfIn: false,
      message: ""
    };
  }
 
  // Begin Enter: Do something here!
  onEnterHandler() {
    console.log("Begin Enter");
    this.setState({ message: "Begin Enter..." });
  }
 
  onEnteringHandler() {
    console.log("Entering... (Wait timeout!)");
    this.setState({ message: "Entering... (Wait timeout!)" });
  }
 
  onEnteredHandler() {
    console.log("OK Entered!");
    this.setState({ message: "OK Entered!" });
  }
 
  // Begin Exit: Do something here!
  onExitHandler() {
    console.log("Begin Exit");
    this.setState({ message: "Begin Exit..." });
  }
 
  onExitingHandler() {
    console.log("Exiting... (Wait timeout!)");
    this.setState({ message: "Exiting... (Wait timeout!)" });
  }
 
  onExitedHandler() {
    console.log("OK Exited!");
    this.setState({ message: "OK Exited!" });
  }
 
  render() {
    return (
      <div>
        <h3>&lt;Transition in={"{this.state.stateOfIn}"} &gt;</h3>
 
        <b>{"\u2728"} Focus on Textfield and see the effects:</b>
        <ul>
          <li className="my-highlight">
            Now 'in' = {String(this.state.stateOfIn)}
          </li>
          <li> false --&gt; true (Enter)</li>
          <li> true --&gt; false (Exit)</li>
        </ul>
        <div className="my-highlight">{this.state.message}</div>
 
        <br />
 
        <input
          type="text"
          onFocus={() => {
            this.setState({ stateOfIn: true });
          }}
          onBlur={() => {
            this.setState({ stateOfIn: false });
          }}
        />
        <br />
 
        <Transition
          in={this.state.stateOfIn}
 
          timeout={{ enter: 1500, exit: 2500 }}
          onEnter={() => this.onEnterHandler()}
          onEntering={() => this.onEnteringHandler()}
          onEntered={() => this.onEnteredHandler()}
          onExit={() => this.onExitHandler()}
          onExiting={() => this.onExitingHandler()}
          onExited={() => this.onExitedHandler()}
        >
        {(statusName) => (
           <div className={`my-msg my-msg-${statusName}`} >User name 2-20 characters</div>
        )}
        </Transition>
      </div>
    );
  }
}
 
export default App;