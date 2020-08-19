//Create a ES6 class Component
class Welcome extends React.Component{
    //Use render() function to return JSX Component
    render(){
        return(
            <div className="welcome">
                <h3>Hi {this.props.name}</h3>
                <i>{this.props.message}</i>
            </div>
        );
    }
}
//Default values of props
Welcome.defaultProps ={
    name :'There',
    message:'Welcome to Website!'
}
const element1 = document.getElementById('welcome1');
const element2 = document.getElementById('welcome2');
//ReactDOM.render() show Component on browser
ReactDOM.render(
    <Welcome name ="Sinh" message ="Sinh is a Beautiful" />,
    element1
)
ReactDOM.render(
    <Welcome />,
    element2,
)