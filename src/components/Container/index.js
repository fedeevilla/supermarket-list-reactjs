import React, { Component } from "react";
import CountItems from "./../CountItems";
import List from "./../List";
import ModalAdd from "./../ModalAdd";
import "./Container.css";
import { removeItem, getItems, addItem } from "../../remote/api";

class Container extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      name: "",
      showModal: false
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

  handleAdd = () => {
    this.setState({ items: addItem(this.state.name) });
    this.hideModalAdd();
  };

  showModalAdd = () => {
    this.setState({ showModal: true });
  };

  hideModalAdd = () => {
    this.setState({ showModal: false, name: "" });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="box">
          <div className="title">Supermarket List</div>
          <CountItems items={this.state.items} />
          <List
            items={this.state.items}
            handleRemove={this.handleRemove}
            handleAdd={this.handleAdd}
          />
          <div>
            <button
              className="button"
              onClick={() => this.setState({ showModal: true })}
            >
              Add item
            </button>
          </div>
          <ModalAdd show={this.state.showModal}>
            <div className="containerModal">
              <h4>Add item</h4>

              <div className="spanInput">
                <input
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <button
                  className="actionButtonClose"
                  onClick={() => this.hideModalAdd()}
                >
                  Cancel
                </button>
                <button
                  className={
                    this.state.name.trim().length < 1
                      ? "actionButtonEmpty"
                      : "actionButtonSave"
                  }
                  onClick={() => this.handleAdd()}
                  disabled={this.state.name.trim().length < 1}
                >
                  Add
                </button>
              </div>
            </div>
          </ModalAdd>
        </div>
      </div>
    );
  }
}

export default Container;
