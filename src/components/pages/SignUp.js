import React, { Component } from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import "../../styling/Functions/functions.css";
import fire from "../../config/Fire";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      firstName: "",
      surname: "",
      dateOfBirth: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.props.history.push("/signup");
      })
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      email: "",
      firstName: "",
      surname: "",
      dateOfBirth: "",
      password: ""
    });
  }
  render() {
    return (
      <div id="signup-allcontent">
        <h1 className="form-header">Eventhype</h1>
        <form>
          <div class="function-form-group">
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>
          <div class="function-form-group">
            <input
              value={this.state.firstName}
              onChange={this.handleChange}
              type="text"
              name="firstName"
              class="form-control"
              id="InputFirstName"
              placeholder="Enter first name"
              required
            />
          </div>
          <div class="function-form-group">
            <input
              value={this.state.surname}
              onChange={this.handleChange}
              type="text"
              name="surname"
              class="form-control"
              id="InputSurname"
              placeholder="Enter surname"
              required
            />
          </div>
          <div class="function-form-group">
            <input
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
              type="text"
              name="dateOfBirth"
              class="form-control"
              id="InputDateOfBirth"
              placeholder="Enter date of birth"
              required
            />
          </div>
          <div class="function-form-group">
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          <button
            onClick={this.signup}
            style={{ marginLeft: "25px" }}
            className="btn btn-warning"
          >
            Signup
          </button>
        </form>
      </div>
    );
  }
}
export default SignUp;
