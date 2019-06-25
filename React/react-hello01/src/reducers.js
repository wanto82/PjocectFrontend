import { combineReducers } from 'redux';

const user = (state = [], action) => {
  console.log("5.Reducer:action", action);
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return action.users;
    case 'GET_USER':
      return action.user;
    default:
      return state;
  }
};

export default combineReducers({ user });