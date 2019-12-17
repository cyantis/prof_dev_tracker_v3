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
    comments: [],
    isActive: false
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

  handleShow = ()=>{
    this.setState({isActive: true})
  }

  handleHide = () =>{
    this.setState({isActive: false})
  }

  componentDidMount(){
    this.getEmployees()
  }

  render() {
    return (
      <div className="CommentsContainer">
        <h2>Comments</h2>
        <ul>{this.commentsList()}</ul>
          {
            this.state.isActive
            ? <div>
                <NewComment eventId={this.state.eventId} userId={this.state.userId}/>
                <a onClick={this.handleHide}><button>Cancel</button></a>
              </div>
            : <a onClick={this.handleShow}><button>Add a Comment</button></a>
          }
      </div>
    );
  }
};

export default CommentsContainer
