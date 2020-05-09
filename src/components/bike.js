import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Like from "./like.js";
import Request from "./request.js";
export default class Bike extends React.Component {
  render() {
    const { vehicle } = this.props;
    return (
      <div className="item">
        <div className="image">
          <img src={vehicle.image} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <i className="large caret up icon" />
            <Like />
            <Request />
            <b>{vehicle.id}</b>
          </div>
        </div>
      </div>
    );
  }
}
