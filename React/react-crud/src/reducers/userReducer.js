import { RECEIVE_USER, UPDATE_USER } from '../actions/user';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case UPDATE_USER:
      return {
        id_user: action.id_user,
        firstName: action.payload.firstName,
        email: action.payload.email,
      }
    default:
      return state;
  }
};
