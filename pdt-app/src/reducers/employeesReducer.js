const employeesReducer = (state = [], action) => {
  switch(action.type){

    case 'ADD_EMPLOYEES':
      return [...action.employees]

    default:
      return state
  }
}

export default employeesReducer
