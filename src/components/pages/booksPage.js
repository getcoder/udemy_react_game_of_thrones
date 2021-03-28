import React from "react";
import ItemList from "../itemList/itemList";
import GotService from "../../services/gotService";
import { withRouter } from "react-router-dom";

function BooksPage({ history }) {
  const gotService = new GotService();
  return (
    <div className="mb-4">
      <ItemList
        getData={gotService.getAllBooks}
        onItemSelected={(itemId) => {
          history.push(itemId);
        }}
        renderItem={({ name, numberOfPages }) => `${name} (${numberOfPages})`}
      />
    </div>
  );
}

export default withRouter(BooksPage);
