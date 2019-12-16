import React from 'react'
import CommentsContainer from '../../containers/CommentsContainer'

class LearningEvent extends React.Component {

  state = {
    comments: []
  }

  eventId = window.location.href.split('3000')[1]

  async getEvent() {
    const response = await fetch(`/api/v1${this.eventId}`)
    const data = await response.json()
    this.setState(data)
  }

  componentDidMount() {
    this.getEvent()
  }

  render() {
    return (
      <div className="LearningEvent">
        LearningEvent Component
        <CommentsContainer comments={this.state.comments}/>
      </div>
    );
  }
};

export default LearningEvent
