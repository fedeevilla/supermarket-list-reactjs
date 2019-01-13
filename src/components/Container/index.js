import React, { Component, Fragment } from "react";
import CountItems from "./../CountItems";
import List from "./../List";

class Container extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({
      items: [
        { id: 1, name: "FEDE" },
        { id: 2, name: "COLO" },
        { id: 3, name: "OSCAR" },
        { id: 4, name: "SILVIA" }
      ]
    });
  }

  handleRemove = id => {
    this.setState({
      ...this.state,
      items: this.state.items.filter(t => t.id !== id)
    });
  };

  handleAdd = item => {
    let max = 0;

    for (var i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].id > max) {
        max = this.state.items[i].id;
      }
    }

    item.id = max + 1;
    this.setState({
      ...this.state,
      items: this.state.items.concat(item)
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Supermarket List</h1>
        <CountItems items={this.state.items} />
        <List
          items={this.state.items}
          handleRemove={this.handleRemove}
          handleAdd={this.handleAdd}
        />
        <div>
          <button onClick={() => this.handleAdd({ name: "TEST" })}>
            Add item
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Container;
