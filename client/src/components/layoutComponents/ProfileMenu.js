import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { logOut } from '../../actions'
import Avatar from '../../images/profile.jpg'
import Button from '../layoutComponents/Button'

class ProfileMenu extends React.Component {

  state = {
    user: localStorage.getItem("user"),
    isActive: false,
  }

  handleEnter = ()=>{
    this.setState({isActive: true})
  }

  handleLeave = ()=>{
    this.setState({isActive: false})
  }

  render() {
    return (
      <div className="ProfileMenu" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <img src={Avatar} className="Avatar" />
        {this.state.isActive
          ? <div>
              <h3>{this.state.user}</h3>
              <Button url='/profile' text='Edit Your Profile' /><br/>
              <a onClick={logOut}><button>Log Out</button></a>
            </div>
          : null
        }
      </div>
    )
  }
}

export default ProfileMenu
