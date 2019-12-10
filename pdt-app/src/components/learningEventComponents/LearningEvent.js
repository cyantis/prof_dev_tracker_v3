import React from 'react'
import CommentsContainer from '../../containers/CommentsContainer'

class LearningEvent extends React.Component {
  render() {
    return (
      <div className="LearningEvent">
        LearningEvent Component
        <CommentsContainer />
      </div>
    );
  }
};

export default LearningEvent
