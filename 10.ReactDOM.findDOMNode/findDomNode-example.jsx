//Create a ES6 component
class Fruits extends React.Component{
    doFind(){
        //Find root Node of this Component
        var node = ReactDOM.findDOMNode(this);
        node.style.border = "1px solid red";
    }
    render(){
        return (
            <ul>
                <li>Apple</li>
                <li>Appricot</li>
                <li>Banana</li>
                <li>
                    <button onClick={()=>this.doFind()}> Find Root Node </button>
                </li>
            </ul>
        );
    }
}
//Render
ReactDOM.render(<Fruits/>,document.getElementById("fruits1"));