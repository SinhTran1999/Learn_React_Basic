//Employee Component
class Employee extends React.Component{
    //User render() function to return JSX component
    render(){
        return(
            <li className="employee">
                <div>
                    <b>Fullname: </b>{this.props.fullName}
                </div>  
                <div>
                    <b>Gender: </b>{this.props.gender}
                </div>
            </li>
        );
    }
}

//EmployeeList Component
class EmployeeList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            employees: [
                {empId: 1, fullName: "Trump",gender: "Male"},
                {empId: 2, fullName: "Ivanka",gender: "Female"},   
                {empId: 3, fullName: "Kushner",gender: "Male"}
            ]
        };
    }
    render(){
        //Array of <Employee>
        var listItems = this.state.employees.map(e => (
            <Employee fullName ={e.fullName} gender={e.gender}/>
        ));
    
        return(
            <ul className ="employee-list">
                {listItems}
            </ul>
        );
    }
}
//Render
ReactDOM.render(<EmployeeList/>, document.getElementById("employeelist1"));