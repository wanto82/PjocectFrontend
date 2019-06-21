import { combineReducers } from 'redux';

const posts = (state = [], action) => {
  console.log("5.Reducer:action", action);
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return action.posts;
    default:
      return state;
  }
};

export default combineReducers({ posts });