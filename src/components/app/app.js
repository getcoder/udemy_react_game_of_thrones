import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharacterPage from "../pages/characterPage/characterPage";
import BooksPage from "../pages/booksPage/booksPage";
import HousesPage from "../pages/housesPage/housesPage";
import ErrorMessage from "../errorMessage/errorMessage";
import GotService from "../../services/gotService";

class App extends Component {
  state = {
    showChar: true,
    error: false,
  };

  gotService = new GotService();

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  toggleChar = () => {
    this.setState(({ showChar }) => {
      const newState = !showChar;
      return {
        showChar: newState,
      };
    });
  };

  render() {
    const { showChar, error } = this.state;
    const content = showChar ? <RandomChar /> : null;

    if (error) {
      return <ErrorMessage />;
    }

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>{content}</Col>
          </Row>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              <button
                onClick={this.toggleChar}
                className="btn btn-primary mb-5"
              >
                Toggle random character
              </button>
            </Col>
          </Row>
          <CharacterPage />
          <BooksPage />
          <HousesPage />
        </Container>
      </>
    );
  }
}

export default App;
