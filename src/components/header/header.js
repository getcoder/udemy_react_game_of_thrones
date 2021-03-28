import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <h3 className="header-title">
        <Link to="/">Game of Thrones DB</Link>
      </h3>
      <nav className="nav">
        <li>
          <Link to="/characters/">Characters</Link>
        </li>
        <li>
          <Link to="/houses/">Houses</Link>
        </li>
        <li>
          <Link to="/books/">Books</Link>
        </li>
      </nav>
    </div>
  );
}
