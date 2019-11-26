import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LearningEvent from '../components/LearningEvent'
import NewEvent from '../components/NewEvent'
import EditEvent from '../components/EditEvent'

class EventsContainer extends React.Component {
  render() {
    return (
      <div className="EventsContainer">
        <Router>
          <Route path="/learningEvent" component={LearningEvent} />
          <Route path="/newEvent" component={NewEvent} />
          <Route path="/editEvent" component={EditEvent} />
        </Router>
      </div>
    );
  }
};

export default EventsContainer
