import React from 'react'
import CommentsContainer from '../../containers/CommentsContainer'

class LearningEvent extends React.Component {

  state = {
    shared: false,
    comments: []
  }

  eventId = window.location.href.split('3000')[1]

  async getEvent() {
    const response = await fetch(`/api/v1${this.eventId}`)
    const data = await response.json()
    this.setState(data)
  }

  shared = () => {
    if(this.state.shared){
      return 'Great job sharing this with your team!'
    }else{
      return "Don't forget to share this with your team!"
    }
  }

  componentDidMount() {
    this.getEvent()
  }

  render() {
    return (
      <div className="LearningEvent">
        <h1>{this.state.name}</h1>
        <p>{this.state.date} | {this.state.category}</p>
        <p>{this.state.description}</p>
        <p><i>{this.shared()}</i></p>
        <CommentsContainer comments={this.state.comments}/>
      </div>
    );
  }
};

export default LearningEvent
