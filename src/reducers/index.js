import { combineReducers } from 'redux';
import PostsReducer from './reducers';

const rootReducer = combineReducers({
  data: PostsReducer
});

export default rootReducer;