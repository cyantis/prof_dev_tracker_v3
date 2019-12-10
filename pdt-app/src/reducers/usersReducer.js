const usersReducer = (state = [], action) => {

  switch(action.type){

    case 'LOGIN_USER':
      return [...action.payload]

    default:
      return state
  }
}

export default usersReducer
