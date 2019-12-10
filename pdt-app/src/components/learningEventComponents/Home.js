import React from 'react'
import LearningEventList from './LearningEventList'

const Home = props => (
  <div className="Home">
    <h2>Who's Learning What?</h2>
    <LearningEventList events={props.events} />
  </div>
)

export default Home
