import React from 'react'
import TopNav from './TopNav'

const Header = () =>
  <div className="Header">
    <h1>PROFESSIONAL DEVELOPMENT TRACKER</h1>
    {window.location.href == "http://localhost:3000/login"
      ? null
      : <TopNav /> 
    }
  </div>

export default Header
