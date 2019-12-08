import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <h1>Professional Development Tracker</h1>
        <div className="Navigation">
          <a href='/learning'><button>Your Learning Log</button></a>
          <a href='/events/new'><button>Log New Learning</button></a>
          <a href=''><button>Log Out</button></a>
        </div>
      </div>
    );
  }
};

export default Header
