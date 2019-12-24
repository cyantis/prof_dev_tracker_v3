import React from 'react'

class AccountProfile extends React.Component {

  state = {
    id: localStorage.getItem("user_id"),
  }

  fetchUrl = `/api/v1/employees/${this.state.id}`

  async getEmployee() {
    const response = await fetch(this.fetchUrl)
    const data = await response.json()
    console.log(data)
    this.setState({
      username: data.username,
      email: data.email,
      name: data.name,
      title: data.title,
      bio: data.bio,
    })
  }

  updateEmployee = employee => {
    fetch(this.fetchUrl, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({employee})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          // Add logic to handle invalid login
        } else {
          console.log(data)
          //localStorage.setItem("isManager", data.manager)
          //localStorage.setItem("user", data.name)
          window.location.href='/learning'
        }
      })
  }

  handleOnChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    this.updateEmployee(this.state)
  }

  componentDidMount() {
    this.getEmployee()
  }

  render() {
    return (
      <div className="AccountProfile">
      <h2>Edit Your Account</h2>
      <form onSubmit={this.handleSubmit}>

        <label>Username</label>
        <input
          name='username'
          value={this.state.username}
          onChange={this.handleOnChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='leave blank to keep current password'
          value={this.state.password}
          onChange={this.handleOnChange}
          /><br/>

        <label>Email</label>
        <input
          name='email'
          value={this.state.email}
          onChange={this.handleOnChange}
          /><br/>

        <label>Your Real Name</label>
          <input
            name='name'
            value={this.state.name}
            onChange={this.handleOnChange}
            /><br/>

        <label>Your Job Title</label>
          <input
            name='title'
            value={this.state.title}
            onChange={this.handleOnChange}
            /><br/>

        <label>Tell us about yourself</label>
          <textarea
            name='bio'
            value={this.state.bio}
            onChange={this.handleOnChange}
            /><br/>


        <label>Where do you work?</label>
          <select name="location_id" onChange={event => this.handleOnChange(event)} value={this.state.location_id} required>
            <option value="1">Charlotte</option>
            <option value="2">Denver</option>
            <option value="3">Remote</option>
          </select><br/>

        <label>Who's Your Manager?</label>
          <select name="manager_id" onChange={event => this.handleOnChange(event)} value={this.state.manager_id} required>\
            <option value="1">Chris Green</option>
            <option value="2">Faruq Rushdie</option>
            <option value="3">Sarah  Abramov</option>
            <option value="nil">I'm a manager</option>
          </select><br/>

          <input type='submit' value='Edit Profile!'/>
          <a href='/learning'><button>Cancel</button></a>
        </form>
      </div>
    );
  }
};

export default AccountProfile
