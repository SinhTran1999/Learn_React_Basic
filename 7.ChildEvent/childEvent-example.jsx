class Child extends React.Component{
    render(){
        return(
            <div className="child">
                <h4>Child</h4>
                <button onClick={this.props.myClickHandler}>Click me!</button>
            </div>
        );
    }
}
class Parent extends React.Component{
    constructor(props){
        super();
        this.state ={
            count:0
        };
    }

    myMethodOfParent(){
        this.setState((prevState, props) =>{
            return{
                count: prevState.count +1
            };
        });
    }
    render(){
        return (
            <div className = "parent">
                <h3>(Parent) Clicked: {this.state.count}</h3>
                <Child myClickHandler ={()=>this.myMethodOfParent()}/>
            </div>
        );
    }
}
//Render
ReactDOM.render(<Parent/>, document.getElementById("placeholder1"));    