import React from "react";
import "./errorMessage.css";
import img from "./error.jpg";

export default function ErrorMessage() {
  return (
    <div className="error-block">
      <img src={img} alt="error" />
      <span className="errorMsg">Something gone wrong</span>
    </div>
  );
}
