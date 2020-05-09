import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class formm extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      name: "",
      age: ""
    };
  }
  render() {
    return (
      <div>
        <form className="form-inline">
          <input
            type="text"
            className="form-control mb-2 mr-sm-2 mb-sm-0"
            placeholder="Name"
            ref={input => (this.name = input)}
          />
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input
              type="text"
              className="form-control"
              placeholder="Age"
              ref={input => (this.age = input)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}
export default formm;
