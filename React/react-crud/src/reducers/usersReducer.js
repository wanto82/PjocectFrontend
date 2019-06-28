import { GET_USERS, ADD_USER} from '../actions/user';

const initialState = { users: [] }
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case ADD_USER:
      return [action.payload, ...state];
    // case REMOVE_ARTICLE:
    //   return state.filter(user => user.id_user !== action.payload.id_user);
    // case REPLACE_ARTICLE:
    //   return state.map((user) => {
    //     if (user.id_user === action.payload.id_user) {
    //       return {
    //         ...user,
    //         email: action.payload.email,
    //         firstName: action.payload.firstName,
    //       }
    //     } else return user;
    //   })
    default:
      return state;
  }
}