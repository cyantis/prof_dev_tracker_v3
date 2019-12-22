import React from 'react'

const LearningEventList = props =>
    props.events.map(event =>
      <li key={event.id}>
        <b>{
          props.employees
            ? (props.employees.filter(employee => event.employees[0].id == employee.id)[0].name + ' ')
            : null
        }</b>
        <a href={`/events/${event.id}`}>
          {event.name}
        </a> | {event.date}
      </li>
    )

export default LearningEventList
