import React from 'react'
import {connect} from 'react-redux'
import {logIn} from '../../reducers/actions'
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
    this.props.logIn(this.state)
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>

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
        </form>
        <h3>--- OR ---</h3>
        <SignUp />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  logIn: loginParams => dispatch(logIn(loginParams))
})

export default connect(null, mapDispatchToProps)(Login)
