import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import LearningEvent from '../components/learningEventComponents/LearningEvent'
import NewEvent from '../components/learningEventComponents/NewEvent'
import EditEvent from '../components/learningEventComponents/EditEvent'

class EventsContainer extends React.Component {

  render() {
    return (
      <div className="EventsContainer">
        <Router>
          <Route path="/events/new" render={props => <NewEvent addLearningEvent={ this.props.addLearningEvent } />} />
        </Router>
      </div>
    );
  }
};

//<Route path=`/events/${id}` component={LearningEvent} />
//<Route path=`/events/${id}/edit` component={EditEvent} />

const mapStateToProps = ({ events }) => ({ events })

const mapDispatchToProps = dispatch => ({
  addLearningEvent: learning => dispatch({ type: 'ADD_EVENT', learning }),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
