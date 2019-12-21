import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ProfileMenu from '../components/layoutComponents/ProfileMenu'
import TopNav from '../components/layoutComponents/TopNav'
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
    this.setState({employees: data})
  }

  componentDidMount(){
    this.getEmployees()
  }

  render() {
    return (
      <div className="Main">
        <TopNav />
        <ProfileMenu />
        <Router>
          <Route path="/home" render={(props) => <Home employees={this.state.employees}/>} />
          <Route exact path="/learning" component={LearningLog} />
          <Route exact path="/events/new" component={NewEvent} />
          <Route exact path="/events/:eventId/edit" component={EditEvent} />
          <Route exact path="/events/:eventId" component={LearningEvent} />
        </Router>
      </div>
    )
  }
}

export default Main
