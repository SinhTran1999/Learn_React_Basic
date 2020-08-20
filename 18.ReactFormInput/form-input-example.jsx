class SimpleForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullName: ""
        };
    }
    handleSubmitForm(event){
        alert("Full Name: "+ this.state.fullName);
        event.preventDefault();
    }
    handleChange(event){
        var value = event.target.value;
        this.setState({
            fullName: value
        });
    }
    render(){
        return (
            <form onSubmit ={event => this.handleSubmitForm(event)}>
                <label>
                    FullName:
                    <input type="text" 
                           value={this.state.fullName} 
                           onChange ={event =>this.handleChange(event)}
                    />
                </label>
                <input type="submit" value="Submit" />
                <p>{this.state.fullName}</p>
            </form>
        );
    }
}
//Render
ReactDOM.render(<SimpleForm/>,document.getElementById("form1"));