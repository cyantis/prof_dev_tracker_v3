import React from 'react'

import Button from '../layoutComponents/Button'

class NewEvent extends React.Component {
  state = {
    employee_ids: [localStorage.getItem("user_id")],
    name: '',
    date: '',
    category: '',
    description: '',
    shared: false,
  }

  handleOnChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  postEvent = event => {
    return fetch('http://localhost:3001/api/v1/events', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({event})
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        // Add logic to handle invalid event creation
      } else {
        window.location.href=`/events/${data.id}`
      }
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.postEvent(this.state)
    this.setState({
      name: '',
      date: '',
      category: '',
      description: '',
      shared: false,
    })
  }


  render() {
    return (
      <div className="NewEvent">
        <h2>Enter New Learning</h2>
          <form onSubmit={ event => this.handleOnSubmit(event) }>
            <p>
              Learning Title
              <input name="name" type="text" onChange={event => this.handleOnChange(event)} value={this.state.name}></input>
            </p>
            <p>
              Date
              <input name="date" type="date" onChange={event => this.handleOnChange(event)} value={this.state.date}></input>
            </p>
            <p>
                Learning Type <select name="category" onChange={event => this.handleOnChange(event)} value={this.state.category} required>
                <option value="" disabled selected hidden>Choose a learning category</option>
                <option value="Book">Book</option>
                <option value="Conference Attendee">Conference Attendee</option>
                <option value="Conference Presenter">Conference Presenter</option>
                <option value="In Person Course">In Person Course</option>
                <option value="Online Course">Online Course</option>
                <option value="Meetup/Social">Meetup/Social</option>
                <option value="Tutorial">Tutorial</option>
                <option value="Other">Other</option>
              </select>
            </p>
            <p>
              Tell us about it <textarea name="description" onChange={event => this.handleOnChange(event)} value={this.state.description}></textarea>
            </p>
            <p>
              Have you shared this with your team?
              <input name="shared" type="checkbox" onChange={event => this.handleOnChange(event)} value={this.state.shared}></input>
            </p>
            <input type="submit" value="Log Learning!"></input>
            <Button url='/learning' text='Cancel' />
        </form>
      </div>
    )
  }
}

export default NewEvent
