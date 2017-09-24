import { FETCH_POSTS, FETCH_PROJECTS, FETCH_CODE, FETCH_PICS } from '../actions/index';


const INITIAL_STATE = { posts: [], projects: [], code: [], pics: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload.items };
    case FETCH_PROJECTS:
      return { ...state, projects: action.payload.items };
    case FETCH_CODE:
      return { ...state, code: action.payload.items };
    case FETCH_PICS:
      return { ...state, pics: action.payload.items };
    default:
      return state;
  }
}