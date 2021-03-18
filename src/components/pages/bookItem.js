import React from "react";
import GotService from "../../services/gotService";
import ItemDetails, { Field } from "../itemDetails";
import { withRouter } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Button } from "reactstrap";

class BookItem extends React.Component {
  gotService = new GotService();

  render() {
    return (
      <>
        <ItemDetails
          itemId={this.props.bookId}
          getData={this.gotService.getBook}
        >
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
            <Button onClick={this.props.history.goBack} color="primary" className='mb-5'>
              Back
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}

export default withRouter(BookItem);
