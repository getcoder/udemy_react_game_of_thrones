import React from "react";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage/errorMessage";
import GotService from "../../services/gotService";
import { withRouter } from "react-router-dom";

class BooksPage extends React.Component {
  state = {
    error: false,
  };

  gotService = new GotService();

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <div className="mb-4">
        <ItemList
          getData={this.gotService.getAllBooks}
          onItemSelected={(itemId) => {
            this.props.history.push(itemId);
          }}
          renderItem={({ name, numberOfPages }) => `${name} (${numberOfPages})`}
        />
      </div>
    );
  }
}

export default withRouter(BooksPage);
