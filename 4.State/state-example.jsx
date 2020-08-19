//Create a ES6 class component
class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "Please Click me",
            clickCount: 0
        };
    }

    //Method updateCount()
    updateCount(){
        this.setState((prevState, props) =>{
            return{
                clickCount: prevState.clickCount + 1,
                text: "Clicked"
            };
        });
    }

    //Use render() function to return JXS Component
    render(){
        return (
            <button onClick ={() => this.updateCount()}>
                {this.state.text}:{this.state.clickCount}
            </button>
        );
    }
}
const element1 = document.getElementById('button1');
const element2 = document.getElementById('button2');
//ReactDOM.render() show component on browser
ReactDOM.render(<Button/>, element1);
ReactDOM.render(<Button/>, element2);
