import React from 'react'

import NewComment from '../components/learningEventComponents/NewComment'
import EditComment from '../components/learningEventComponents/EditComment'

class CommentsContainer extends React.Component {

  state = {
    eventId: window.location.href.split('events/')[1],
    userId: localStorage.getItem('user_id'),
    comments: [],
    commentId: '',
    commentContent: '',
    newComment: false,
    editComment: false,
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
          <b>{this.state.employees.find(employee => employee.id == comment.employee_id).username} says:</b> {comment.content} | {comment.updated_at.split('T')[0]}{this.state.userId == comment.employee_id && !this.state.editComment ? <a onClick={event => this.handleEditOn(comment.id, comment.content)}><button>Edit</button></a> : null}
        </li>
      )
    }
  }

  handleShow = ()=>{
    this.setState({newComment: true})
  }

  handleHide = () =>{
    this.setState({newComment: false})
  }

  handleEditOn = (id, content) =>{
    this.setState(
      {
        editComment: true,
        commentId: id,
        commentContent: content
      }
    )
  }

  handleEditOff = () =>{
    this.setState(
      {
        editComment: false,
      }
    )
  }

  componentDidMount(){
    this.getEmployees()
  }

  render() {
    return (
      <div className="CommentsContainer">
        <h2>Comments</h2>
        <ul className="CommentsList">{this.commentsList()}</ul>
          {
            this.state.editComment
            ? <div>
                <EditComment eventId={this.state.eventId} commentId={this.state.commentId} commentContent={this.state.commentContent}/>
                <a onClick={this.handleEditOff}><button>Cancel</button></a>
              </div>
            : null
          }
          <br/>
          {
            this.state.newComment
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
