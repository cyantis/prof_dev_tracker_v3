import React from 'react'

class EditEvent extends React.Component {

  state = {
  }

  eventId = window.location.href.split('3000')[1].split('/edit')[0]

  async getEvent() {
    const response = await fetch(`/api/v1${this.eventId}`)
    const data = await response.json()
    this.setState(data)
  }

  editEvent = event => {
    return fetch(`http://localhost:3001/api/v1${this.eventId}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({event})
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        // Add logic to handle invalid event update
      } else {
        window.location.href=`/events/${data.id}`
      }
    })
  }

  handleOnChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.editEvent(this.state)
  }

  componentDidMount() {
    this.getEvent()
  }

  render() {
    return (
      <div className="EditEvent">
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
                Learning Type
                <select name="category" onChange={event => this.handleOnChange(event)} value={this.state.category} required>
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
                Tell us about it
                <textarea name="description" onChange={event => this.handleOnChange(event)} value={this.state.description}></textarea>
              </p>
              <p>
                Have you shared this with your team?
                <input name="shared" type="checkbox" onChange={event => this.handleOnChange(event)} value={this.state.shared}></input>
              </p>
              <input type="submit" value="Edit Learning!"></input>
          </form>
      </div>
    )
  }
}

export default EditEvent
