import cuid from 'cuid';
export const cuidFn = cuid;

const learningReducer = (state = [], action) => {

  switch(action.type){

    case 'ADD_EVENT':
      return [...state, { ...action.learning, id: cuid() }];

    default:
      return state;
  }
}

export default learningReducer
