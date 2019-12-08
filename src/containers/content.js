import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../components/layoutComponents/Home'
import LearningLog from '../components/accountComponents/LearningProfile'
import EventsContainer from './EventsContainer'

class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <Router>
          <Route path="/home" component={Home} />
          <Route path="/learning" component={LearningLog} />
        </Router>
        <EventsContainer />
      </div>
    );
  }
};

export default Content
