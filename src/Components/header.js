import React, { Component } from "react";
import Symbol from "../media/happy-ghost.svg";
import "../index.css";

const HEADERDATA = {
  textPart1: "Eugenia Zigisova",
  textPart2: "Web developer",
  textPart3: "Speaker",
};
class Header extends Component {
  render() {
    return (
      <header className="flexbox nowrap">
        <h1>
          {HEADERDATA.textPart1}
          <br />
          <span className="red-text">{HEADERDATA.textPart2}</span>
          <br />
          {HEADERDATA.textPart3}
        </h1>
      </header>
    );
  }
}

export default Header;
