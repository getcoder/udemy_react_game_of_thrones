import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharacterPage from "../characterPage/characterPage";
import ErrorMessage from "../errorMessage/errorMessage";

class App extends React.Component {
  state = {
    showChar: true,
    error: false,
  };

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
        </Container>
      </>
    );
  }
}

export default App;
