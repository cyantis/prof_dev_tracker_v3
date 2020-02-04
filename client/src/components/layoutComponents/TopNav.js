import React from 'react'
import Button from './Button'

const TopNav = () =>
      <div className="TopNav">
        <Button url='/home' text='Home' />
        <Button url='/learning' text='Your Learning Log' />
        <Button url='/events/new' text='Log New Learning' />
      </div>

export default TopNav
