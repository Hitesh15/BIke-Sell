import React, { Component } from "react";
import Entries from "../entry.js";
import Bike from "./components/bike.js";
export default class Allbikes extends React.Component {
  render() {
    const sorted = Entries.list.map(a => (
      <Bike key={"bike-" + a.id} vehicle={a} />
    ));
    return (
      <div>
        <div className="ui unstackable items">{sorted}</div>
        <h2>{Entries.list[0].request}</h2>
      </div>
    );
  }
}
