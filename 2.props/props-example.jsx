//Create a ES6 class Component
class Greeting extends React.Component{
    //Use render() function to return JSX Component
    render(){
        return(
            <div className="greeting">
                <h3>Hello{this.props.fullName}</h3>
            </div>
        );
    }
}
const element1 = document.getElementById('greeting1');
//Use ReactDOM.render() show component on  browser
ReactDOM.render(
    <Greeting fullName ="Tran"/>,element1
);