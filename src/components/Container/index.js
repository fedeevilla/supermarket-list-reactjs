import React, { Component, Fragment } from "react";
import CountItems from "./../CountItems";
import List from "./../List";
import ModalAddItem from "./../ModalAddItem";
import "./Container.css";
import * as constants from "./../../constants/constants";
import { removeItem, getItems, addItem } from "../../remote/api";

class Container extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      name: "",
      showModalAddItem: false
    };
  }

  componentDidMount() {
    this.setState({
      items: getItems()
    });
  }

  handleRemove = id => {
    this.setState({ items: removeItem(id) });
  };

  handleAddItem = () => {
    this.setState({ items: addItem(this.state.name) });
    this.hideModalAddItem();
  };

  showModalAddItem = () => {
    this.setState({ showModalAddItem: true });
  };

  hideModalAddItem = () => {
    this.setState({
      showModalAddItem: false,
      name: ""
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <div className="box">
          <div className="title">{constants.TITLE_CONTAINER}</div>
          <CountItems count={this.state.items.length} />
          <List
            items={this.state.items}
            handleRemove={this.handleRemove}
            handleAdd={this.handleAdd}
          />
          <Fragment>
            <button
              className="button"
              onClick={() => this.setState({ showModalAddItem: true })}
            >
              {constants.ADD_ITEM}
            </button>
          </Fragment>
          <ModalAddItem
            show={this.state.showModalAddItem}
            name={this.state.name}
            handleChange={this.handleChange}
            handleAddItem={this.handleAddItem}
            hideModalAddItem={this.hideModalAddItem}
          />
        </div>
      </div>
    );
  }
}

export default Container;
