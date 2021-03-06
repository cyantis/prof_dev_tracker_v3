import React from 'react'

import Button from '../layoutComponents/Button'
import CommentsContainer from '../../containers/CommentsContainer'

class LearningEvent extends React.Component {

  state = {
    eventId: window.location.href.split('3000')[1],
    shared: false,
    employees: [{}],
    comments: [],
  }

  async getEvent() {
    const response = await fetch(`/api/v1${this.state.eventId}`)
    const data = await response.json()
    this.setState(data)
  }

  shared = () => {
    if(this.state.employees[0].id == localStorage.getItem("user_id")){
      if(this.state.shared){
        return 'Great job sharing this with your team!'
      }else{
        return "Don't forget to share this with your team!"
      }
    }
  }

  deleteEvent = event => {
    return fetch(`/api/v1${this.state.eventId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({event})
    })
      .then(resp => window.location.href='/learning')
  }

  crudButtons = () => {
    if(this.state.employees[0].id == localStorage.getItem("user_id")){
      return(
        <div>
          <Button url={`${this.state.eventId}/edit`} text='Edit'/>
          <a onClick={event => this.deleteEvent(this.state)}><button>Delete</button></a>
        </div>
      )
    }
  }

  componentDidMount() {
    this.getEvent()
  }

  render() {
    return (
      <div className="LearningEvent">
        <h1>{this.state.name}</h1>
        <h3>{this.state.employees[0].name}</h3>
        <p>{this.state.date} | {this.state.category}</p>
        <p>{this.state.description}</p>
        <p><i>{this.shared()}</i></p>
        {this.crudButtons()}
        <CommentsContainer comments={this.state.comments}/>
      </div>
    )
  }
}

export default LearningEvent
