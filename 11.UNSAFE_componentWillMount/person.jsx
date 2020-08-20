class Person extends React.Component{
    constructor(props){
        super(props);
        this.state = {mode: undefined};
    }
    UNSAFE_componentWillMount(){
        let modeValue;
        if(this.props.age >70){
            modeValue = "old";
        }else if(this.props.age <18){
            modeValue = "young";
        }else{
            modeValue ="middle";
        }
        this.setState({mode: modeValue});
    }

    render(){
        return(
            <div className={"person person-" + this.state.mode}>
                {this.props.name}(age: {this.props.age})
            </div>
        );
    }
}
Person.defaultProps ={age: "unknown"};
//Render
ReactDOM.render(
    <Person name="Donald Trump" age="72" />,
    document.getElementById("person1")
);
ReactDOM.render(
    <Person name ="Ivanka Trump" age ="36"/>,
    document.getElementById("person2")
);