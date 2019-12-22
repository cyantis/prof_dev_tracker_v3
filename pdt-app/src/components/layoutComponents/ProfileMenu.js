import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { logOut } from '../../actions'
import AccountProfile from '../accountComponents/AccountProfile'
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
        <h3>{this.state.user}</h3>
        {this.state.isActive
          ? <div>
              <Button url='/profile' text='Edit Your Profile' />
              <a onClick={logOut}><button>Log Out</button></a>
            </div>
          : null
        }
        <Router>
          <Route path="/profile" component={AccountProfile} />
        </Router>
      </div>
    )
  }
}

export default ProfileMenu
