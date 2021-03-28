import React from "react";
import GotService from "../../services/gotService";
import ItemDetails, { Field } from "../itemDetails/itemDetails";
import { withRouter } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Button } from "reactstrap";

function BookItem({ bookId, history }) {
  const gotService = new GotService();
  return (
    <>
      <ItemDetails itemId={bookId} getData={gotService.getBook}>
        <Field field="name" label="Name" />
        <Field field="numberOfPages" label="Number of pages" />
        <Field field="publiser" label="Publiser" />
        <Field field="released" label="Released" />
      </ItemDetails>
      <Row>
        <Col>
          {/* <button
              onClick={this.props.history.goBack}
              className="btn btn-primary mb-5"
            >
              Back
            </button> */}
          <Button onClick={history.goBack} color="primary" className="mb-5">
            Back
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default withRouter(BookItem);
