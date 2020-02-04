import React from 'react'
import { connect } from 'react-redux'

import LearningEventList from './LearningEventList'

class Home extends React.Component {

  state = {
    events: []
  }

  async getEvents() {
    const response = await fetch('/api/v1/events')
    const data = await response.json()
    this.setState({events: data})
  }

  componentDidMount() {
    this.getEvents()
  }

  render(){
    return(
      <div className="Home">
        <h2>Who's Learning What?</h2>
        <div className="LearningList">
          <LearningEventList events={this.state.events} employees={this.props.employees} />
        </div>
      </div>
    )}
  }

const mapStateToProps = ({ employees }) => ({ employees })

export default connect(mapStateToProps)(Home)
