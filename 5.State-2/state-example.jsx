//Create a ES6 class component
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: "",
            searchCount: 0,
            resultCount: 0
        };
    }
    changeSearchText(Event){
        var v = event.target.value;
        this.setState((prevState,props) =>{
            return{
                searchText:v
            };
        });
    }
    doSearch(){
        this.setState((prevState, props)=>{
            var count = this.state.searchText.length * 3;
            return{
                searchCount: prevState.searchCount + 1,
                resultCount: count
            };
        });
    }
    render(){
        return(
            <div className='search-box'>
                <input type="text" value ={this.state.searchText}
                 onChange ={this.changeSearchText.bind(this)}/>
                 <button onClick={this.doSearch.bind(this)}>Search</button>
                 <div>Search Text: {this.state.searchText}</div>
                 <div>Search Count: {this.state.searchCount}</div>
                 <div>Result Count: {this.state.resultCount}</div>
            </div>
        );
    }
}
//Render()
ReactDOM.render(<Search/>, document.getElementById("search1"));