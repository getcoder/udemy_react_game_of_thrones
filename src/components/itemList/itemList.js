import React, { Component } from "react";
// import Spinner from "reactstrap/lib/Spinner";
import PropTypes from "prop-types";
import { withData } from "../hoc/withData";

import "./itemList.css";

class ItemList extends Component {
  static defaultProps = {
    onItemSelected: () => {},
  };

  static propTypes = {
    onItemSelected: PropTypes.func,
  };

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
    const { data } = this.props;
    const items = this.renderItems(data);

    return <ul className="item-list list-group">{items}</ul>;
  }
}

export default withData(ItemList);
