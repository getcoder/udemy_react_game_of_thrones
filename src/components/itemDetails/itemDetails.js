import React, { Component } from "react";
import GotService from "../../services/gotService";

import "./itemDetails.css";

const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default class ItemDetails extends Component {
  state = {
    item: null,
  };

  gotService = new GotService();

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => this.setState({ item }));
  };

  renderItem = (item) => {
    const { name } = item;

    return (
      <>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </>
    );
  };

  render() {
    const { item } = this.state;

    const content = item ? (
      this.renderItem(item)
    ) : (
      <span className="select-error">Select an item</span>
    );
    return <div className="item-details rounded">{content}</div>;
  }
}

export { Field };
