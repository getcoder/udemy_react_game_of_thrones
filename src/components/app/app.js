import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharactersPage from "../pages/charactersPage";
import BooksPage from "../pages/booksPage";
import HousesPage from "../pages/housesPage";
import BookItem from "../pages/bookItem";
import ErrorMessage from "../errorMessage/errorMessage";
import GotService from "../../services/gotService";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Router>
        <div className="app">
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

            <Route path="/characters" component={CharactersPage} />
            <Route path="/houses" component={HousesPage} />
            <Route path="/books" exact component={BooksPage} />
            <Route
              path="/books/:id"
              render={({ match, location, history }) => {
                // console.log(match);
                // console.log(location);
                // console.log(history);

                const id = match.params.id;

                return <BookItem bookId={id} />;
              }}
            />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
