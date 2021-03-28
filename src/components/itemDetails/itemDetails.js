import React, { useState, useEffect } from "react";
import { withData } from "../hoc/withData";

import "./itemDetails.css";

const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Field };

function ItemDetails({ itemId, getData, children, data = {} }) {
  const [item, setItem] = useState(data);

  useEffect(() => {
    setItem(data);
    renderItem(item);
  });

  const renderItem = (item) => {
    const { name } = item;
    return (
      <>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </>
    );
  };

  const content = item ? (
    renderItem(item)
  ) : (
    <span className="select-error">Select an item</span>
  );

  return <div className="item-details rounded">{content}</div>;
}

export default withData(ItemDetails);
