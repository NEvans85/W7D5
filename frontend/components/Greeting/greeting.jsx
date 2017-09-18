import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutButton = this.handleLogoutButton.bind(this);
  }

  render() {
    return this.props.currentUser ? (
      <div>
        <p>Welcome {this.props.currentUser.username}!</p>
        <button onClick={this.handleLogoutButton}>Logout</button>
      </div>
    ) : (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    );
  }

  handleLogoutButton(e) {
    e.preventDefault();
    this.props.logout();
  }
}

export default Greeting;
