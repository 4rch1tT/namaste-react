// import React from "react";
import { Component } from "react";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component did mount ");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <User name={"Dev 1"} location={"Kerala"} role={"Web developer"} />
        <User name={"Dev 2"} location={"Kerala"} role={"Web developer"} />
      </div>
    );
  }
}

/*
 In class based components: parent constructor -> parent render -> child constructor -> child render -> child did mount -> parent did mount

 If there is more than one child: parent constructor -> parent render -> child 1 constructor -> child 1 render -> child 2 constructor -> child 2 render -> child 1 did mount -> child 2 did mount -> parent did mount

 In class based components api calls are made inside componentDidMount()

 React lifecycle
 Mounting:
  2 phases: 1.Render phase -> constructor and render
            2.Commit phase -> updates dom and refs and component did mount
*/

export default About;
