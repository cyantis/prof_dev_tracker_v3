import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LearningLog from '../components/accountComponents/LearningProfile'
import LearningEvent from '../components/learningEventComponents/LearningEvent'
import NewEvent from '../components/learningEventComponents/NewEvent'
import LearningEventList from '../components/learningEventComponents/LearningEventList'

class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <Router>
          <Route path="/learning" component={LearningLog} />
          <Route path="/events/new" render={props => <NewEvent addLearningEvent={ this.props.addLearningEvent } />} />
        </Router>
        <LearningEventList events={this.props.events} />
      </div>
    );
  }
};

const mapStateToProps = ({ events }) => ({ events })

const mapDispatchToProps = dispatch => ({
  addLearningEvent: learning => dispatch({ type: 'ADD_EVENT', learning }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
