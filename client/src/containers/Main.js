import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import AccountProfile from '../components/accountComponents/AccountProfile'
import ProfileMenu from '../components/layoutComponents/ProfileMenu'
import Home from '../components/learningEventComponents/Home'
import LearningEvent from '../components/learningEventComponents/LearningEvent'
import LearningLog from '../components/learningEventComponents/LearningLog'
import NewEvent from '../components/learningEventComponents/NewEvent'
import EditEvent from '../components/learningEventComponents/EditEvent'


class Main extends React.Component {

  state = {
    employees: []
  }

  async getEmployees() {
    const response = await fetch(`/api/v1/employees`)
    const data = await response.json()
    this.props.addEmployees(data)
  }

  componentDidMount(){
    this.getEmployees()
  }

  render() {
    return (
      <div className="Main">
        <ProfileMenu />
        <Router>
          <Route path="/home" component={Home} />
          <Route exact path="/learning" component={LearningLog} />
          <Route exact path="/events/new" component={NewEvent} />
          <Route exact path="/events/:eventId/edit" component={EditEvent} />
          {window.location.href == "http://localhost:3000/events/new"
            ? null
            : <Route exact path="/events/:eventId" component={LearningEvent} />
          }
          <Route path="/profile" component={AccountProfile} />
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addEmployees: employees => dispatch({ type: 'ADD_EMPLOYEES', employees }),
})

export default connect(null, mapDispatchToProps)(Main)
