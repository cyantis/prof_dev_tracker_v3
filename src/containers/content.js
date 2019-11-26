import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../components/Home'
import Learning from '../components/Learning'

class Content extends React.Component {
  render() {
    return (
      <div className="Content">
      Content Component
        <Router>
          <Route path="/home" component={Home} />
          <Route path="/learning" component={Learning} />
        </Router>
      </div>
    );
  }
};

export default Content
