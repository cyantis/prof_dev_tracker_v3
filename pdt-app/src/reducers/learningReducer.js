//import cuid from 'cuid'
//export const cuidFn = cuid

const learningReducer = (state = [], action) => {

  switch(action.type){

    case 'ADD_EVENT':
      return [...action.learning]

    default:
      return state
  }
}

export default learningReducer
