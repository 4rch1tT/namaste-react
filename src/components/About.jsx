// import React from "react";
import { Component } from "react";
import User from "./User";
 import UserContext from "../utils/UserContext.jsx";

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
        <div>
          Logged in user
          <UserContext.Consumer>
            {({loggedInUser})=><p className="font-bold">{loggedInUser}</p>}
          </UserContext.Consumer>
        </div>
        <User name={"Dev 1"} location={"Kerala"} role={"Web developer"} />
        <User name={"Dev 2"} location={"Kerala"} role={"Web developer"} />
      </div>
    );
  }
}

/*
React lifecycle
Mounting:
 2 phases: 1.Render phase -> constructor and render
           2.Commit phase -> updates dom and refs and component did mount

 In class based components: parent constructor -> parent render -> child constructor -> child render -> child did mount -> parent did mount

 If there is more than one child: parent constructor -> parent render -> child 1 constructor -> child 1 render -> child 2 constructor -> child 2 render -> child 1 did mount -> child 2 did mount -> parent did mount

 children component batches the render phase

 In class based components api calls are made inside componentDidMount()

*/

export default About;
