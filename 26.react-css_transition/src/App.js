import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
import { TransitionGroup, CSSTransition } from "react-transition-group";
 
class App extends React.Component  {
 
    render()  {
      return (
          <div>
             <MyDiv></MyDiv>
          </div>
        );
    }
}
 
class MyDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateOfIn: false,
      message : ""
    };
  }
 
  // Begin Enter: Do anything!
  onEnterHandler()  {
     this.setState({message: 'Begin Enter...'});
  }
 
  onEnteredHandler ()  {
     this.setState({message: 'OK Entered!'});
  }
 
  onEnteringHandler() {
     this.setState({message: 'Entering... (Wait timeout!)'});
  }
 
  // Begin Exit: Do anything!
  onExitHandler() {
     this.setState({message: 'Begin Exit...'});
  }
 
  onExitingHandler() {
     this.setState({message: 'Exiting... (Wait timeout!)'});
  }
 
  onExitedHandler() {
     this.setState({message: 'OK Exited!'});
  }
 
  render()  {
 
    return (
          <div>
            <CSSTransition
              classNames="example"
              in={this.state.stateOfIn}
 
              timeout={1500}
 
              onEnter = {() =>  this.onEnterHandler()}
              onEntering = {() =>  this.onEnteringHandler()}
              onEntered={() =>  this.onEnteredHandler()}
 
              onExit={() =>  this.onExitHandler()}
              onExiting={() =>  this.onExitingHandler()}
              onExited={() =>  this.onExitedHandler()}
            >
              <div className ="my-div">
                 <b>{"\u2728"} Click the buttons and see the effects:</b>
                 <ul>
                    <li className ="my-highlight">Now 'in' = {String(this.state.stateOfIn)}</li>
                    <li>  false --&gt; true (Enter)</li>
                    <li>  true  --&gt; false (Exit)</li>
                 </ul>
                 <div className="my-message">{this.state.message}</div>
              </div>
 
            </CSSTransition>
            <h3>&lt;CSSTransition in={'{this.state.stateOfIn}'} &gt;</h3>
 
            <button onClick={() => {this.setState({ stateOfIn: true });}}>Set stateOfIn = true</button>
            <button onClick={() => {this.setState({ stateOfIn: false });}}>Set stateOfIn = false</button>
          </div>
        );
  }
}
 
export default App;