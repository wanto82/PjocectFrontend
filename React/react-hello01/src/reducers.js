import { combineReducers } from 'redux';

// const users = (state = [], action) => {
//   console.log("5.Reducer:action", action);
//   switch (action.type) {
//     case 'RECEIVE_POSTS':
//       return action.users;
//     case 'GET_USER':
//       return state.map((user) => {
//         if (user.id === action.payload.id_user) {
//           return {
//             ...user,
//             id_user: action.payload.id_user,
//             email: action.payload.email,
//           }
//         } else return user;
//       })
//     default:
//       return state;
//   }
// };
// export default combineReducers({ users });

const initialState = { users: [] }
export default function userssReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return action.users;
    case 'GET_USER':
      return state.map((user) => {
        if (user.id === action.payload.id_user) {
          return {
            ...user,
            id_user: action.payload.id_user,
            email: action.payload.email,
          }
        } else return user;
      })
    default:
      return state;
  }
}