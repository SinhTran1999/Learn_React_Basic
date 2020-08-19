

//Create a ES6 class component
class Person extends React.Component{
    //Use the render() function to return JSX component
    render(){
        return (
            <div className = "person-info">
                <h3>Person{this.props.personNo}:</h3>
                <ul>
                    <li>First Name: {this.props.firstName}</li>
                    <li>Last Name: {this.props.lastName}</li>
                </ul>
            </div>
        );
    }
}
const element1  = document.getElementById('person1');
const element2 = document.getElementById('person2');
//Use the ReactDOM.render to show your component on the browser
ReactDOM.render(
    <Person personNo = '1' firstName ='Bill' lastName='Gate' />, element1
);
//Use the ReactDOM.render to show your component on the browser
ReactDOM.render(
    <Person personNo='2' firstName = 'Donald' lastName ='Trump'/>, element2
);