import React from 'react'
import LearningEventList from './LearningEventList'

class LearningLog extends React.Component {

  state = {
    events: []
  }

  employeeId = localStorage.getItem("user_id");

  async getEmployee() {
    const response = await fetch(`/api/v1/employees/${this.employeeId}`)
    const data = await response.json()
    this.setState({
      name: data.name,
      title: data.title,
      bio: data.bio,
      events: data.events,
      })
      console.log(data.events)
  }

  componentDidMount() {
    this.getEmployee()
  }

  render() {
    return (
      <div className="LearningLog">
        <h1>{this.state.name}</h1>
        <p>{this.state.title} | {this.state.bio}</p>
        <LearningEventList events={this.state.events} />
      </div>
    );
  }
};

export default LearningLog
