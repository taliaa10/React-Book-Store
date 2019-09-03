import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="nav__navContainer">
        <div className="nav__navContent">
          {/* <h1>goodreads</h1> */}
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">My Books</a>
            </li>
            <li>
              <a href="#">Browse</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
          <input placeholder="Search books"></input>
          <ul className="authLinks">
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Join</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
