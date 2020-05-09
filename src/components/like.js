import React, { Component } from "react";

export default class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  inctme = () => {
    let max = 10;
    if (this.state.count < 10) {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.inctme}> {this.state.count}</button>
      </div>
    );
  }
}
