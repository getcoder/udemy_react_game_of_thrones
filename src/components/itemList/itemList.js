import React from "react";
import { withData } from "../hoc/withData";

import "./itemList.css";

function ItemList({ renderItem, onItemSelected, data }) {
  function renderItems(arr) {
    return arr.map((item) => {
      const label = renderItem(item);
      return (
        <li
          key={item.id}
          onClick={() => onItemSelected(item.id)}
          className="list-group-item"
        >
          {label}
        </li>
      );
    });
  }

  const items = renderItems(data);

  return <ul className="item-list list-group">{items}</ul>;
}

export default withData(ItemList);
