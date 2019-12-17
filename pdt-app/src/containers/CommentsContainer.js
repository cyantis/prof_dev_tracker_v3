import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Button from '../components/layoutComponents/Button'
import NewComment from '../components/learningEventComponents/NewComment'
import EditComment from '../components/learningEventComponents/EditComment'

class CommentsContainer extends React.Component {

  state = {
    eventId: window.location.href.split('events/')[1],
    userId: localStorage.getItem('user_id'),
    comments: []
  }

  async getEmployees() {
    const response = await fetch(`/api/v1/employees`)
    const data = await response.json()
    this.setState({employees: data})
  }

  commentsList = () => {
      if(this.state.employees){
      return this.props.comments.map(comment =>
        <li key={comment.id}>
          <b>{this.state.employees.find(employee => employee.id == comment.employee_id).username} says:</b> {comment.content} | {comment.updated_at.split('T')[0]}
          </li>
      )
    }
  }

  componentDidMount(){
    this.getEmployees()
  }

  render() {
    return (
      <div className="CommentsContainer">
        <Router>
          <Route path="events/:eventId/comments/new" component={NewComment} />
          <Route path="events/:eventId/comments/:commentId/edit" component={EditComment} />
        </Router>
      <h2>Comments</h2>
      <ul>{this.commentsList()}</ul>
      <Button url={`/events/${this.state.eventId}/comments/new`} text='Add a Comment' />
      </div>
    );
  }
};

export default CommentsContainer
