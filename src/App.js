import { Component } from "react";
import Counter from "./Counter";
import "./styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <Counter />
      </div>
    );
  }
}
