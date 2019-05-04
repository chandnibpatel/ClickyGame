import React from "react";
import "./Header.css";

const header= props => (
    <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highScore}
    </div>
  </div>
);
export default header