// Class based component
import React from "react";

class User extends React.Component {
  constructor(props) {
    // super method is used to bind "this"
    super(props);

    console.log("child constructor")

    // this is how we assign state in class based component
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  componentDidMount(){
    console.log("child component did mount")
  }
  render() {
    console.log("child render")
    const { name, location, role } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user">
        <h2>Count:{count}</h2>
        <h2>Count2:{count2}</h2>
        <button
          onClick={() => {
            // this is how we update states in class based components
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click me
        </button>
        <p>{name}</p>
        <p>{location}</p>
        <p>{role}</p>
      </div>
    );
  }
}

export default User;
