import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr/>
          <div className="main-route-place">
            <Route exact path="/" component={Home}/>
            <Route  path="/about" component={About}/>
            <Route  path="/topics" component={Topics}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
class Home extends React.Component{
  render(){
    return(
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}
class About extends React.Component{
  render(){
    return(
      <div>
        <h2>About</h2>
      </div>
    );
  }
}
class Topics extends React.Component{
  render(){
    return(
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
                Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>
              Components
            </Link> 
          </li> 
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v.State
            </Link> 
          </li>  
        </ul>
        <div className="secondary-route-place">
          <Route 
            path={`${this.props.match.url}/:topicId`}
            component={Topic}
          />
          <Route
            exact
            path={this.props.match.url}
            render={() =>
              <h3>
                Please select a topic.
              </h3>
            }
            />
        </div>
      </div>
    );
  }
}
class Topic extends React.Component{
  render(){
    return(
      <di>
        <h3>
          {this.props.match.params.topicId}
        </h3>
      </di>
    );
  }
}

export default App;
