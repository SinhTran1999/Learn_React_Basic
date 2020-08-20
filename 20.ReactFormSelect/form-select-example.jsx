class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        favoriteFlavor: "coconut"
      };
    }
   
    handleSubmitForm(event) {
      alert("Favorite Flavor: " + this.state.favoriteFlavor);
      event.preventDefault();
    }
   
    handleChange(event) {
      var value = event.target.value;
   
      this.setState({
        favoriteFlavor: value
      });
    }
   
    render() {
      return (
        <form onSubmit={event => this.handleSubmitForm(event)}>
          <p>Pick your favorite flavor:</p>
          <select
              value={this.state.favoriteFlavor}
              onChange={event => this.handleChange(event)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
   
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
   
  // Render
  ReactDOM.render(<FlavorForm />, document.getElementById("form1"));
  