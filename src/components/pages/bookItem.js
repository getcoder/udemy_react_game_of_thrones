import React from "react";
import GotService from "../../services/gotService";
import ItemDetails, { Field } from "../itemDetails";

export default class BookItem extends React.Component {
  gotService = new GotService();

  render() {
    return (
      <ItemDetails itemId={this.props.bookId} getData={this.gotService.getBook}>
        <Field field="name" label="Name" />
        <Field field="numberOfPages" label="Number of pages" />
        <Field field="publiser" label="Publiser" />
        <Field field="released" label="Released" />
      </ItemDetails>
    );
  }
}
