import { Component } from "react";
import { Incrementer } from "./components/incrementer-fn";
import "./App.css";
import { Clock } from "./components/clock-fn";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

export default App;
