//Create a ES6 class component
class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loaded:false,
            empID: "[empId]",
            fullName:"[fullName]"
        };
    }
    //Load data from Server
    loadEmployeeData(){
        setTimeout(()=>{
            console.log("Data is loaded");
            this.setState({
                loaded: true,
                empID: this.props.empID,
                fullName: "Emp" + Math.random()
            });
        }, 1000);
    }
    componentDidMount(){
        this.loadEmployeeData();
    }
    render(){
        if(this.state.loaded == true){
            return (
                <div className="employee">
                    <p>Emp Id:{this.state.empID}</p>
                    <p>Full Name: {this.state.fullName}</p>
                </div>
            );
        }else{
            return (
                <div className ="employee">
                    <p>
                        Wait while data loading. EmpID: {this.props.empID}
                    </p>
                </div>
            );
        }
    }
}
//Render
ReactDOM.render(<Employee empID="1"/>, document.getElementById("employee1"));