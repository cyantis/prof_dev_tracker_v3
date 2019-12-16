import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Button from '../components/layoutComponents/Button'
import NewComment from '../components/learningEventComponents/NewComment'
import EditComment from '../components/learningEventComponents/EditComment'

class CommentsContainer extends React.Component {

  commentsList = () => {
    return this.props.comments.map(comment => <li key={comment.id}>{comment.content} | {comment.updated_at}</li>)

  }

  render() {
    return (
      <div className="CommentsContainer">
      <h2>Comments</h2>
      <ul>{this.commentsList()}</ul>
      <Button url='/comments/new' text='Add a Comment' />
        <Router>
          <Route path="/comments/new" component={NewComment} />
          <Route path="/comments/:commentId/edit" component={EditComment} />
        </Router>
      </div>
    );
  }
};

export default CommentsContainer
