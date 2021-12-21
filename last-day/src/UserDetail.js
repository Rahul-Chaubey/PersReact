import React, { Component } from "react";
import ReactDom from "react-dom";
import reactToWebcomponent from "react-to-webcomponent";

export class UserDetail extends Component {
  render() {
    return <h1>In UserDetail with webcomponent</h1>;
  }
}

const UserDetailComponent = reactToWebcomponent(UserDetail, React, ReactDom);
window.customElements.define("user-detail", UserDetailComponent);
