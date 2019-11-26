import { combineReducers } from 'redux'
import cuid from 'cuid'
import learningReducer from './learningReducer'
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
  learning: learningReducer,
  comments: commentsReducer,
});

export default rootReducer;
