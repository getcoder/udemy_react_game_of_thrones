import React, { Component } from "react";
import GotService from "../../services/gotService";

import "./charDetails.css";

export default class CharDetails extends Component {
  state = {
    char: null,
  };

  gotService = new GotService();

  componentDidMount() {
    this.updateChar();
  }

  updateChar = () => {
    const { charId } = this.props;

    if (!charId) {
      return;
    }

    this.gotService
      .getCharacter(charId)
      .then((char) => this.setState({ char }));
  };

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  renderChar = (char) => {
    const { name, gender, born, died, culture } = char;

    return (
      <>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture}</span>
          </li>
        </ul>
      </>
    );
  };

  render() {
    const { char } = this.state;

    const content = char ? (
      this.renderChar(char)
    ) : (
      <span className="select-error">Select a character</span>
    );
    return <div className="char-details rounded">{content}</div>;
  }
}
