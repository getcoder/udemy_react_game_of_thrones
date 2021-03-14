import React, { Component } from "react";
// import Spinner from "reactstrap/lib/Spinner";
import Spinner from "../spinner/spinner";

import "./itemList.css";

export default class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then((itemList) => {
      this.setState({
        itemList,
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const label = this.props.renderItem(item);
      return (
        <li
          key={item.id}
          onClick={() => this.props.onItemSelected(item.id)}
          className="list-group-item"
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    const content = itemList ? this.renderItems(itemList) : <Spinner />;

    return <ul className="item-list list-group">{content}</ul>;
  }
}
