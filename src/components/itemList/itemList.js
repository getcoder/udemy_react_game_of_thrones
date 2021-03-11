import React, { Component } from "react";
import "./itemList.css";

// import { ListGroup, ListGroupItem } from "reactstrap";

export default class ItemList extends Component {
  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">John Snow</li>
        <li className="list-group-item">Brandon Stark</li>
        <li className="list-group-item">Geremy</li>
        {/* <ListGroup>
          <ListGroupItem active tag="a" href="#" action>
            John Snow
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action>
            Brandon Stark
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action>
            Geremy
          </ListGroupItem>
        </ListGroup> */}
      </ul>
    );
  }
}
