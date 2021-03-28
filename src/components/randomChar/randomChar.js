import React, { useEffect, useState } from "react";
import GotService from "../../services/gotService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

import "./randomChar.css";

export default function RandomChar({ interval = 5000 }) {
  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    updateChar();
    const timerId = setInterval(updateChar, interval);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const gotService = new GotService();

  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const updateChar = () => {
    const id = Math.floor(Math.random() * 140 + 25);
    gotService
      .getCharacter(id)
      .then((res) => onCharLoaded(res))
      .catch(onError);
  };

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  return (
    <div className="random-block rounded">
      <View char={char} />
    </div>
  );
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
