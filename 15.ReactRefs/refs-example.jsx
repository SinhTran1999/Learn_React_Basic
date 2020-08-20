class SearchBox extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            searchText: "reactjs"
        };
        this.searchFieldRef = React.createRef();
    }
    clearAndFocus(){
        this.setState({searchText:""});
        //Focus to Input Field
        this.searchFieldRef.current.focus();
        this.searchFieldRef.current.style.background ="#e8f8f5";
    }
    changeSearchText(event){
        var v = event.target.value;
        this.setState((prevState, props)=>{
            return {
                searchText: v
            };
        });
    }
    render(){
        return (
            <div className="search-box">
                <input
                    value={this.state.searchText}
                    ref = {this.searchFieldRef}
                    onChange ={event =>this.changeSearchText(event)} 
               />
                <button onClick={()=>this.clearAndFocus()}>Clear And Focus</button>
                <a href="">Reset</a>
            </div>
        );
    }
}
//Render
ReactDOM.render(<SearchBox/>, document.getElementById("searchbox1"));