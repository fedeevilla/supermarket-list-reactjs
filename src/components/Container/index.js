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
    console.log(id);
    // this.setState({
    //   ...this.state,
    //   items: this.state.tasks.filter(t => t.id !== id)
    // });
  };

  render() {
    return (
      <Fragment>
        <h1>Supermarket List</h1>
        <CountItems items={this.state.items} />
        <List items={this.state.items} handleRemove={this.handleRemove} />
      </Fragment>
    );
  }
}

export default Container;
