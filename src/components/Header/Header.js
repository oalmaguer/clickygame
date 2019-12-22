import React from "react";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} HighScore: {props.finalScore}
    </div>
  </div>
);

export default Header;
