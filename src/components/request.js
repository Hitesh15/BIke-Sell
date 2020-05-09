import React, { Component } from "react";
import Entries from "../../entry.js";

export default class request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: true,
      name: "man"
    };
  }

  hitit = () => {
    const { request } = this.state;

    this.setState({ request: !request });
    Entries.list[0].request = request ? "yes" : "no";
  };
  render() {
    return (
      <div>
        <button onClick={this.hitit}>
          Cureent status is {this.state.request}
        </button>
        <h1>{Entries.list[0].request}</h1>
      </div>
    );
  }
}
