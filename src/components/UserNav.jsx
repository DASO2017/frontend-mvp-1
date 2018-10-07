import React, { Component } from "react";
import plus_icon from "../images/icons/plus.png";

class UserNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: this.props.isAuthenticated
    };
  }

  render() {
    return (
      <div className="height">
        {this.state.isAuthenticated ? (
          <div className="desktopNav">
            <div className="nav-button">
              <a href="/create" className="createEvent">
                Create Event
                <img src={plus_icon} alt="plus icon" />
              </a>
            </div>
            <a href="#" className="nav-profile">
              {this.props.username}
              <img src={this.props.profilePicture} alt="profile picture" />
            </a>
          </div>
        ) : (
          <div className="desktopNav">
            <div className="nav-button">
              <a href="/login">Login</a>
            </div>
            <div className="nav-button">
              <a href="/signup">Sign Up</a>
            </div>
          </div>
        )}
        <div className="mobileNav">
          <a href="#">&#9776;</a>
        </div>
      </div>
    );
  }
}

export default UserNav;
