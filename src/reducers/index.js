import { combineReducers } from 'redux';
import PostsReducer from './textPosts_reducer';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;