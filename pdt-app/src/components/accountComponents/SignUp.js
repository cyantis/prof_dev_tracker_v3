import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createEmployee} from '../../reducers/actions'

class Signup extends Component {

  async getEmployees() {
    const response = await fetch('/api/v1/employees')
    const data = await response.json()
  }

  componentDidMount() {
    this.getEmployees()
  }

  state = {
    username: "",
    password: "",
    email: "",
    name: "",
    location_id: 2,
    manager_id: null,
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createEmployee(this.state)
  }

  render() {
    return (
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>
          <h1>Create an Account</h1>

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

          <label>Email</label>
          <input
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleOnChange}
            /><br/>

          <label>Your Real Name</label>
            <input
              name='name'
              placeholder='Real Name'
              value={this.state.name}
              onChange={this.handleOnChange}
              /><br/>

            <input type='submit' value='SignUp!'/>
          </form>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createEmployee: userInfo => dispatch(createEmployee(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup)

/*  <label>Where do you work?</label>
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
    </select><br/> */

    //https://stackoverflow.com/questions/40844891/react-howto-create-dynamic-select-option-list-from-array
