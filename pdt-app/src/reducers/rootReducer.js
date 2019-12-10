import { combineReducers } from 'redux'
import cuid from 'cuid'
import learningReducer from './learningReducer'
import commentsReducer from './commentsReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  events: learningReducer,
  comments: commentsReducer,
  users: usersReducer,
});

export default rootReducer;
