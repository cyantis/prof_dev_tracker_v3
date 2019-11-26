import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LearningEvent from '../components/learningEventComponents/LearningEvent'
import NewEvent from '../components/learningEventComponents/NewEvent'
import EditEvent from '../components/learningEventComponents/EditEvent'
import CommentsContainer from './CommentsContainer'

class EventsContainer extends React.Component {
  render() {
    return (
      <div className="EventsContainer">
        <Router>
          <Route path="/learningEvent" component={LearningEvent} />
          <Route path="/newEvent" component={NewEvent} />
          <Route path="/editEvent" component={EditEvent} />
        </Router>
        <CommentsContainer />
      </div>
    );
  }
};

export default EventsContainer
