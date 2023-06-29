import { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  incrCount = () => {
    this.setState((state, props) => {
      return { count: state.count + 1 };
    });
  };
  decrCount = () => {
    this.setState((state, props) => {
      if (state.count === 0) {
        return { count: 0 };
      }
      return { count: state.count - 1 };
    });
  };
  resetCount = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <>
        <div className="counter">{this.state.count}</div>
        <div className="button-grp">
          <button onClick={this.decrCount}>Decrement</button>
          <button onClick={this.resetCount}>Reset</button>
          <button onClick={this.incrCount}>Increment</button>
        </div>
      </>
    );
  }
}
