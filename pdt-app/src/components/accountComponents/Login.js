import React from 'react'
import { logIn } from '../../actions'
import SignUp from './SignUp'

class Login extends React.Component {

  state = {
    username: "",
    password: "",
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    logIn(this.state)
  }

  render() {
    return (
      <div>
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>

              <label>Username</label>
              <input
                name='username'
                placeholder='Username'
                value={this.state.username}
                onChange={this.handleOnChange}
                /><br/>

              <label>Password</label>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleOnChange}
                /><br/>

              <input type='submit' value='LogIn!'/>
            </form><br/>
            <h3>--- OR ---</h3>
          </div>
        <SignUp />
      </div>
    )
  }
}

export default Login
