import React from 'react'
import Button from './Button'

class TopNav extends React.Component {

  render() {
    return (
      <div className="TopNav">
        <Button url='/learning' text='Your Learning Log' />
        <Button url='/events/new' text='Log New Learning' />
        <Button url='/home' text='Home' />
      </div>
    )
  }
}

export default TopNav
