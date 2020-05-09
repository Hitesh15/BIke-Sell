import React, { Component } from "react";

import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Jumbtron } from "./Jumbtron";
import { Addbike } from "./AddBike";
import { ItemCard } from "./ItemCard";

class App extends React.Component {
  state = {
    scholarno: "",
    charge: "",
    items: [
      {
        id: 1,
        scholarno: "171111",
        charge: "15"
      },
      {
        id: 2,
        scholarno: "171112",
        charge: "30"
      },
      {
        id: 3,
        scholarno: "171113",
        charge: "45"
      },
      {
        id: 4,
        scholarno: "171114",
        charge: "50"
      }
    ]
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  addBike = event => {
    event.preventDefault();
    const { scholarno, charge } = this.state;
    const itemsInState = this.state.items;
    const length = itemsInState.length;
    const id = length ? itemsInState[length - 1].id + 1 : 1;

    this.setState({
      items: [...itemsInState, Object.assign({}, { id, scholarno, charge })],
      scholarno: "",
      charge: ""
    });
    console.log(this.state.items);
  };

  toggleItemEditing = index => {
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            isEditing: !item.isEditing
          };
        }
        return item;
      })
    });
  };

  handleItemUpdate = (event, index) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            [name]: value
          };
        }
        return item;
      })
    });
  };

  onDelete = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
  };

  render() {
    const { scholarno, charge } = this.state;

    return (
      <div>
        <Nav />

        <Jumbtron />
        <div className="container pt-4">
          <Addbike
            scholarno={scholarno}
            charge={charge}
            onChange={this.handleInputChange}
            onSubmit={this.addBike}
          />
        </div>
        <div className="row">
          {this.state.items.map((item, index) => (
            <ItemCard
              key={item.id}
              index={index}
              item={item}
              toggleEditing={() => this.toggleItemEditing(index)}
              onChange={this.handleItemUpdate}
              onDelete={() => this.onDelete(index)}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
