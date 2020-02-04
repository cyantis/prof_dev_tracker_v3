import React from 'react'
import { connect } from 'react-redux'

import LearningEventList from './LearningEventList'

class LearningLog extends React.Component {

  state = {
    employeeId: localStorage.getItem("user_id"),
    events: [],
    managerEmployeeList: [],
  }

  async getEmployee() {
    const response = await fetch(`/api/v1/employees/${this.state.employeeId}`)
    const data = await response.json()
    this.setState({
      name: data.name,
      title: data.title,
      bio: data.bio,
      events: data.events,
    })
  }

  async getEvents() {
    const response = await fetch(`/api/v1/events`)
    const data = await response.json()
    this.setState({managerEmployeeList: data})
  }

  managerList = () => {
    if(localStorage.getItem("isManager") === "true"){
      const eList = this.state.managerEmployeeList.filter(event => event.employees[0].manager_id == this.state.employeeId)
      return(
        <div className="LearningLog">
        <h3>Your Team's Learning</h3>
        <div className="LearningList">
          <LearningEventList events={eList} employees={this.props.employees}/>
        </div>
        </div>
      )
    }
  }

  componentDidMount() {
    this.getEmployee()
    this.getEvents()
  }

  render() {
    return (
      <div className="LearningLog">
        <h2>{this.state.name}</h2>
        <p>{this.state.title} | {this.state.bio}</p>
        <h3>Your Learning Log</h3>
        <div className="LearningList">
          <LearningEventList events={this.state.events} />
        </div>
        {this.managerList()}
      </div>
    )
  }
}

const mapStateToProps = ({ employees }) => ({ employees })

export default connect(mapStateToProps)(LearningLog)
