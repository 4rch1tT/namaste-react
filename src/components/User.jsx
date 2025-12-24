// Class based component
import React from "react";

class User extends React.Component {
 constructor(props){
  // super method is used to bind "this" 
  super(props)
 }
  render() {
   const {name,location,role} = this.props
    return (
      <div className="user">
        <p>{name}</p>
        <p>{location}</p>
        <p>{role}</p>
      </div>
    );
  }
}

export default User;
