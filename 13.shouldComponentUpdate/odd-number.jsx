//Create a ES6 class component
class NumberView extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            currentNumber: 1
        };
    }
    nextValue(){
        this.setState((prevState, props) =>{
            return {
                currentNumber: prevState.currentNumber + 1
            };
        });
    }
    shouldComponentUpdate(nextProps, nextState){
        //Old Number
        return nextState.currentNumber % 2 == 1;
    }
    render(){
        return (
            <div className="number-viewer">
                <button onClick ={() =>this.nextValue()}>Next Value</button>
                <p>Current Value: {this.state.currentNumber}</p>
            </div>
        );
    }
}
//Render
ReactDOM.render(<NumberView/>,document.getElementById("numberview1"));