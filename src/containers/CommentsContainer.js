import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NewComment from '../components/NewComment'
import EditComment from '../components/EditComment'

class CommentsContainer extends React.Component {
  render() {
    return (
      <div className="CommentsContainer">
      CommentsContainer
        <Router>
          <Route path="/newComment" component={NewComment} />
          <Route path="/editComment" component={EditComment} />
        </Router>
      </div>
    );
  }
};

export default CommentsContainer
