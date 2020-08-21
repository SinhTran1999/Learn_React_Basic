import React from 'react';
import './App.css';

// Define a Component: Person
// Like you create a new Tag:
// <Person personNo='1' firstName='Bill' lastName='Gates' />
class Person extends React.Component{
  //Use the render function to retun JSX component
  render(){
    return(
      <div className ="person-info">
        <h3>Person {this.props.personNo}:</h3>
        <ul>
          <li>First Name: {this.props.firstName}</li>
          <li>Last Name: {this.props.lastName}</li>
        </ul>
      </div>
    );
  }
}
// Define a Component: App
// Like you create a new Tag: <App />
class App extends React.Component{

  //Use the render functon to return JSX component
  render(){
    return(
      <div className="people">
        <Person personNo="1" firstName="Bill" lastName="Gates"/>
        <Person personNo="2" firstName="Donald" lastName="Trump"/>
      </div>
    );
  }
}
//Export App component
export default App;
