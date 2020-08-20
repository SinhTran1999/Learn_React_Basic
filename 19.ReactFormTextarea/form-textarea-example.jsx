class EssayForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            content: ""
        };
    }
    handleSubmitForm(event){
        alert("Textarea Content:" + this.state.content);
        event.preventDefault();
    }
    handleChange(event){
        var value = event.target.value;
        this.setState({
            content: value
        });
    }
    render(){
        return (
            <form onSubmit={event => this.handleSubmitForm(event)}>
              <label>Content</label>
              <br/>
              <textarea cols="45" rows="5"
                        value ={this.state.content}
                        onChange={event =>this.handleChange(event)} 
              />
              <br/>
              <input type="submit" value="Submit" />
              <p>{this.state.content}</p>  
            </form>
        );
    }
}
//Render
ReactDOM.render(<EssayForm/>, document.getElementById("form1"));