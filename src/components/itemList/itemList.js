import React, { Component } from "react";
// import Spinner from "reactstrap/lib/Spinner";
import Spinner from "../spinner/spinner";
import GotService from "../../services/gotService";

import "./itemList.css";

// import { ListGroup, ListGroupItem } from "reactstrap";

export default class ItemList extends Component {
  state = {
    charList: null,
  };

  componentDidMount() {
    this.gotService.getAllCharacters().then((charList) => {
      this.setState({
        charList,
      });
    });
  }

  gotService = new GotService();

  renderItems(arr) {
    console.log(arr);
    return arr.map((item) => {
      return (
        <li
          key={item.id}
          onClick={() => this.props.onCharSelected(item.id)}
          className="list-group-item"
        >
          {item.name}
        </li>
      );
    });
  }

  render() {
    const { charList } = this.state;

    const content = charList ? this.renderItems(charList) : <Spinner />;

    return (
      <ul className="item-list list-group">
        {content}
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
