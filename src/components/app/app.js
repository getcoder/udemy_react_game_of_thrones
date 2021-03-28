import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header/header";
import RandomChar from "../randomChar/randomChar";
import CharactersPage from "../pages/charactersPage";
import BooksPage from "../pages/booksPage";
import HousesPage from "../pages/housesPage";
import BookItem from "../pages/bookItem";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [showChar, setShowChar] = useState(false);

  const toggleChar = () => {
    setShowChar(!showChar);
  };

  return (
    <Router>
      <div className="app">
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>{showChar && <RandomChar />}</Col>
          </Row>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              <button onClick={toggleChar} className="btn btn-primary mb-5">
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
