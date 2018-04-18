import React, { Component } from "react";
 
class Menu extends Component {
  render() {
    return (
        <div>
          <h1>Riot Api</h1>
          <ul className="header">
            <li><a href="/">Champions</a></li>
            <li><a href="/stuff">Random Game</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Menu;