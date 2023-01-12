import React from "react";

export class WelcomeClass extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.nickname}</h1>
      </div>
    );
  }
}
