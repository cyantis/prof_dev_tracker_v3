import React from 'react'
import Button from './Button'

const TopNav = () =>
      <div className="TopNav">
        <Button url='/learning' text='Your Learning Log' />
        <Button url='/events/new' text='Log New Learning' />
        <Button url='/home' text='Home' />
      </div>

export default TopNav
