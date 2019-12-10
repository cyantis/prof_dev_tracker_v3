import React from 'react'
import Button from './Button'

const TopNav = () => {
  return (
    <div className="TopNav">
      <Button url='/learning' text='Your Learning Log' />
      <Button url='/events/new' text='Log New Learning' />
      <Button url='' text='Log Out' />
    </div>
  )
}

export default TopNav
