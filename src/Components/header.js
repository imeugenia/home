import React, { Component } from "react";
import "../index.css";

const HEADERDATA = {
  textPart1: "I am Eugenia.",
  textPart2: "A web engineer,",
  textPart3: "UI design enthusiast.",
};
class Header extends Component {
  render() {
    return (
      <header className="flexbox nowrap">
        <div className="col-1" />
        <div className="col-2">
          <h2>
            {HEADERDATA.textPart1}
            <br />
            <span className="red-text">{HEADERDATA.textPart2}</span>
            <br />
            {HEADERDATA.textPart3}
          </h2>
        </div>
      </header>
    );
  }
}

export default Header;
