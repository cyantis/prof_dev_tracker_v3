import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../../reducers/actions';

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    name: "",
    location_id: "",
    manager_id: "",
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

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

        <label>Your Real Name</label>
          <input
            name='name'
            placeholder='Real Name'
            value={this.state.name}
            onChange={this.handleOnChange}
            /><br/>

          <label>Where do you work?</label>
          <select name="location_id" onChange={event => this.handleOnChange(event)} value={this.state.location_id} required>
            <option value="" disabled selected hidden>Choose a location</option>
            <option value="1">Charlotte</option>
            <option value="2">Denver</option>
            <option value="3">Remote</option>
          </select><br/>

          <label>Who's Your Manager?</label>
            <select name="manager_id" onChange={event => this.handleOnChange(event)} value={this.state.manager_id} required>
              <option value="" disabled selected hidden>Pick Your Boss</option>
              <option value="1">Chris Brown</option>
              <option value="2">Faruq Rushdie</option>
              <option value="3">Sarah  Abramov</option>
              <option value="nil">I'm a manager</option>
            </select><br/>

          <input type='submit' value='SignUp!'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
