import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ProfileMenu from '../components/layoutComponents/ProfileMenu'
import TopNav from '../components/layoutComponents/TopNav'
import Home from '../components/learningEventComponents/Home'
import LearningEvent from '../components/learningEventComponents/LearningEvent'
import LearningLog from '../components/learningEventComponents/LearningLog'
import NewEvent from '../components/learningEventComponents/NewEvent'
import EditEvent from '../components/learningEventComponents/EditEvent'


class Main extends React.Component {

  render() {
    return (
      <div className="Main">
        <ProfileMenu />
        <TopNav />
        <Router>
          <Route path="/learning" component={LearningLog} />
          <Route path="/events/new" component={NewEvent} />
          <Route path="/events/:eventId/edit" component={EditEvent} />
          <Route path="/events/:eventId" component={LearningEvent} />
          <Route path="/home" component={Home} />
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
