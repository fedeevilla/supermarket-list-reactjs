import React, { Component, Fragment } from "react";
import CountItems from "./../CountItems";
import List from "./../List";
import ModalAddItem from "./../ModalAddItem";
import "./Container.css";
import * as constants from "./../../constants/constants";
import loading from "../../assets/loading.gif";
import { removeItem, addItem, getItems } from "../../remote/api";

class Container extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      name: "",
      showModalAddItem: false,
      showLoading: false
    };
  }

  componentDidMount() {
    this.showLoading();

    getItems().then(response =>
      this.setState({
        items: response,
        showLoading: false
      })
    );
  }

  handleRemove = id => {
    this.showLoading();

    removeItem(id).then(response =>
      this.setState({
        items: response,
        showLoading: false
      })
    );
  };

  handleAddItem = () => {
    this.showLoading();

    addItem(this.state.name).then(response =>
      this.setState({
        items: response,
        showLoading: false
      })
    );

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

  showLoading = () => {
    this.setState({
      showLoading: true
    });
  };

  renderDataList = () => {
    return (
      <Fragment>
        <CountItems count={this.state.items.length} />
        <List
          items={this.state.items}
          handleRemove={this.handleRemove}
          handleAdd={this.handleAdd}
        />
      </Fragment>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="box">
          <div className="title">{constants.TITLE_CONTAINER}</div>
          {this.state.showLoading ? (
            <div className="divImg">
              <img className="loading" src={loading} alt="Loading" />
            </div>
          ) : (
            this.renderDataList()
          )}
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
