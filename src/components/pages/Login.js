import React, { Component } from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import "../../styling/Functions/functions.css";
import fire from "../../config/Fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
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
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
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
          <button type="submit" onClick={this.login} class="btn btn-warning">
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
