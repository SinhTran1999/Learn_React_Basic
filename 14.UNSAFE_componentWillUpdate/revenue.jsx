class RevenueView extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        year: 2018,
        revenue: 1000,
        growthRate: "Unknown"
      };
    }
   
    nextYear() {
      this.setState((prevState, props) => {
        var randomRevenue = prevState.revenue * (1 + Math.random());
        return {
          year: prevState.year + 1,
          revenue: randomRevenue
        };
      });
    }
   
    UNSAFE_componentWillUpdate(nextProps, nextState) {
      var rate = (nextState.revenue - this.state.revenue) / this.state.revenue;
      nextState.growthRate = 100 * rate + " %";
    }
   
    render() {
      return (
        <div className="revenue-view">
          <p>Year: {this.state.year}</p>
          <p>Revenue: {this.state.revenue}</p>
          <p>Growth Rate: {this.state.growthRate}</p>
          <button onClick={() => this.nextYear()}>Next Year</button>
        </div>
      );
    }
  }
   
  // Render
  ReactDOM.render(<RevenueView />, document.getElementById("revenueview1"));