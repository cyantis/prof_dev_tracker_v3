const learningReducer = (state = [], action) => {

  switch(action.type){

    case 'ADD_EVENT':
      return [...state, ...action.learning]

    default:
      return state
  }
}

export default learningReducer
