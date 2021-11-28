import React, { Component } from "react";
import "./style.less";

export default class Details extends Component {
  static Description = class extends Component {
    render() {
      return (
        <>
          <h2 className="title">{this.props.title}</h2>
          <p className="description">{this.props.children}</p>
        </>
      );
    }
  };

  static Plan = class extends Component {
    render() {
      return (
        <div className="plan">
          <img src={this.props.icon.src} alt={this.props.icon.alt || "Icon"} />
          <h3 className="title">
            {this.props.name}
            <br />
            <span className="price">{this.props.price}</span>
          </h3>
          <button className="change">Change</button>
        </div>
      );
    }
  };

  render() {
    return <div className="details">{this.props.children}</div>;
  }
}
