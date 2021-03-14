import React from "react";
import ItemList from "../../itemList";
import ItemDetails, { Field } from "../../itemDetails";
import ErrorMessage from "../../errorMessage/errorMessage";
import GotService from "../../../services/gotService";
import RowBlock from "../../rowBlock/rowBlock";

class BooksPage extends React.Component {
  state = {
    selectedBook: 12,
    error: false,
  };

  gotService = new GotService();

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  onItemSelected = (id) => {
    this.setState({
      selectedBook: id,
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        getData={this.gotService.getAllBooks}
        onItemSelected={this.onItemSelected}
        renderItem={({ name, numberOfPages }) => `${name} (${numberOfPages})`}
      />
    );

    const bookDetails = (
      <ItemDetails
        itemId={this.state.selectedBook}
        getData={this.gotService.getBook}
      >
        <Field field="name" label="Name" />
        <Field field="numberOfPages" label="Number of pages" />
        <Field field="publiser" label="Publiser" />
        <Field field="released" label="Released" />
      </ItemDetails>
    );

    return <RowBlock left={itemList} right={bookDetails} />;
  }
}

export default BooksPage;
