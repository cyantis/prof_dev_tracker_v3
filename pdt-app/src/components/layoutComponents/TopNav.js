import React from 'react'
import Button from './Button'
import {logOut} from '../../reducers/actions'

class TopNav extends React.Component {

  render() {
    return (
      <div className="TopNav">
        <Button url='/learning' text='Your Learning Log' />
        <Button url='/events/new' text='Log New Learning' />
        <Button url='/home' text='Home' />
        <a onClick={logOut}><button>Log Out</button></a>
      </div>
    )
  }
}

export default TopNav
