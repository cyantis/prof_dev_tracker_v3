import React from 'react'
import { createEmployee } from '../../actions'

class SignUp extends React.Component {

  state = {
    username: "",
    password: "",
    email: "",
    name: "",
    location_id: "",
    manager_id: "",
  }

  async getEmployees() {
    const response = await fetch('/api/v1/employees')
    const data = await response.json()
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    createEmployee(this.state)
  }

  componentDidMount() {
    this.getEmployees()
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
              <option value="1">Chris Green</option>
              <option value="2">Faruq Rushdie</option>
              <option value="3">Sarah  Abramov</option>
              <option value="nil">I'm a manager</option>
            </select><br/>

            <input type='submit' value='SignUp!'/>
          </form>
        </div>
    )
  }
}

export default SignUp

//https://stackoverflow.com/questions/40844891/react-howto-create-dynamic-select-option-list-from-array
