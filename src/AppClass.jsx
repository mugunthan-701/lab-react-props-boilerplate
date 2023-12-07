import React, { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  render() {
    const data = this.props.imageData()
    return (
      <div id="app">
        <div id="header">
          <h1>kalvium gallery</h1>
        </div>
        <div id="grid">
          {data.map((e) => (
            <img key={e.id} src={e.img} alt="" />
          ))}
        </div>
      </div>
    );
  }
}
