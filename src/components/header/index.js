import React from "react";
import "./Header.css";

const header= props => (
    <div className="header">
    <div>{props.children}</div>
    <div className={props.navMsgColor}>{props.gameMessage}</div>
    <div >
      Score: {props.score} <span className="pipe">| </span> Highscore: {props.highScore}
    </div>
  </div>
);
export default header