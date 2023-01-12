import { Component } from "react";
import { Welcome } from "./components/welcome";
import { WelcomeClass } from "./components/welcome-class";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Fre",
    };
  }
  handleClick = () => {
    this.setState({
      name: "Lidya",
    });
  };
  render() {
    return (
      <div>
        <Welcome name={this.state.name} />
        {/* <WelcomeClass nickname="Fre" /> */}
        <button onClick={this.handleClick}>Change Name</button>
        {/* <ul>
          <li>Apple </li>
          <li>Banana</li>
          <li>Pineapple</li>
        </ul> */}
      </div>
    );
  }
}

export default App;
