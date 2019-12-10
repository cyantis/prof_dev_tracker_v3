import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LearningLog from '../components/accountComponents/LearningProfile'
import ProfileMenu from '../components/layoutComponents/ProfileMenu'
import TopNav from '../components/layoutComponents/TopNav'
import Home from '../components/learningEventComponents/Home'
import LearningEvent from '../components/learningEventComponents/LearningEvent'
import NewEvent from '../components/learningEventComponents/NewEvent'


class Main extends React.Component {

  async getEvents() {
    const response = await fetch('/api/v1/events')
    const data = await response.json()
    this.props.addLearningEvent(data)
  }

  componentDidMount() {
    this.getEvents()
  }

  render() {
    return (
      <div className="Main">
        <ProfileMenu />
        <TopNav />
        <Router>
          <Route path="/learning" component={LearningLog} />
          <Route path="/events/new" render={props => <NewEvent addLearningEvent={this.props.addLearningEvent} />} />
          <Route path="/home" render={props => <Home events={this.props.events} />} />
        </Router>
      </div>
    );
  }
};

const mapStateToProps = ({ events }) => ({ events })

const mapDispatchToProps = dispatch => ({
  addLearningEvent: learning => dispatch({ type: 'ADD_EVENT', learning }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
