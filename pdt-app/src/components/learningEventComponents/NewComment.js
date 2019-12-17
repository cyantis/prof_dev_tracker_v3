import React from 'react'

class NewComment extends React.Component {

  state = {
    event_id: this.props.eventId,
    employee_id: this.props.userId,
    content: ""
  }

  handleOnChange = event => {
    this.setState({
      content: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.postComment(this.state)
    //setState?
  }

  postComment = comment => {
    return fetch(`http://localhost:3001/api/v1/events/${this.state.event_id}/comments`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({comment})
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        // Add logic to handle invalid comment creation
      } else {
        window.location.href=`/events/${data.event_id}`
      }
    })
  }

  render() {
    return (
      <div className="NewComment">
        <form onSubmit={ event => this.handleOnSubmit(event) }>
          <p>
            Say something!
            <textarea name="content" onChange={event => this.handleOnChange(event)} value={this.state.content}></textarea>
          </p>
          <input type="submit" value="Submit Comment!"></input>
        </form>
      </div>
    );
  }
};

export default NewComment
