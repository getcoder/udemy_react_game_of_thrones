import React, { Component } from "react";
import GotService from "../../services/gotService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import "./randomChar.css";

export default class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateChar();
    this.timerId = setInterval(this.updateChar, 3000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  gotService = new GotService();

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * 140 + 25);
    this.gotService
      .getCharacter(id)
      .then((res) => this.onCharLoaded(res))
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;

    const content = loading ? <Spinner /> : <View char={char} />;
    const errorMsg = error ? <ErrorMessage /> : content;

    return <div className="random-block rounded">{errorMsg}</div>;
  }
}

const View = ({ char }) => {
  const { name, gender, born, died, culture } = char;
  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender</span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};
