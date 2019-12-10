import React from 'react'

const LearningEventList = props => {

  return(
    props.events.map(event => <li key={event.id}><a href={`/events/${event.id}`}>{event.name}</a> {event.date}</li>)
  )
}

export default LearningEventList
