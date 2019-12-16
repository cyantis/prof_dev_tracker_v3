import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NewComment from '../components/learningEventComponents/NewComment'
import EditComment from '../components/learningEventComponents/EditComment'

class CommentsContainer extends React.Component {
  render() {
    return (
      <div className="CommentsContainer">
      <h2>Comments</h2>
        <Router>
          <Route path="/comments/new" component={NewComment} />
        </Router>
      </div>
    );
  }
};

//<Route path=`/comment/${id}/edit` component={EditComment} />

export default CommentsContainer
