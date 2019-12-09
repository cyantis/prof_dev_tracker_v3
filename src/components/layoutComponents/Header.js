import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className="Header">
      <h1>Professional Development Tracker</h1>
      <div className="Navigation">
        <Button url='/learning' text='Your Learning Log' />
        <Button url='/events/new' text='Log New Learning' />
        <Button url='' text='Log Out' />
      </div>
    </div>
  )
}

export default Header
