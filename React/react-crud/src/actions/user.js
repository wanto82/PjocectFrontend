import axios from 'axios';
import history from '../history';

export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const REPLACE_USER = 'REPLACE_USER';

const apiUrl = 'http://localhost:8080/users';

export const getUsers = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        console.log("getUsersss..:" + response.data)
        dispatch({ type: GET_USERS, users: response.data })
      })
      .catch(error => { throw (error); });
  };
};

export const addUser = ({ firstName, email }) => {
  console.log("user..:" + firstName);
  var params = new URLSearchParams();
  params.append('firstName', firstName);
  params.append('email', email);
  return (dispatch) => {
    return axios.post(apiUrl, { firstName, email })
      .then(response => {
        // let data = response.data;
        // dispatch({ type: ADD_USER, payload: { id_user: data.id_user, firstName: data.firstName, email: data.email } })
      })
      .then(() => {
        history.push("/users")
      })
      .catch(error => { throw (error) });
  };
};

// export const getUser = (id) => {
//   return (dispatch) => {
//     return axios.get('${apiUrl}/${id}.json')
//       .then(response => {
//         dispatch({type: RECEIVE_USER, user: response.data});
//       })
//       .catch(error => { 
//         throw(error); 
//       });
//   };
// };

// export const deleteUser = (id) => {
//   return (dispatch) => {
//     return axios.delete('${apiUrl}/${id}.json')
//       .then(response => {
//         dispatch({type: REMOVE_USER, payload: {id}})
//       })
//       .then(() => {
//         history.push("/users")
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };

// export const updateUser = (user) => {
//   const userId = user.id;
//   return (dispatch) => {
//     return axios.patch('${apiUrl}/${user.id}.json', {title: user.title, content: user.content})
//       .then(response => {
//         const data = response.data;
//         dispatch({type: UPDATE_USER, payload: {id: data.id, title: data.title, content: data.content}})
//         dispatch({type: REPLACE_USER, payload: {id: data.id, title: data.title, content: data.content}})
//       })
//       .then(() => {
//         history.push('/users/${userId}')
//       })
//       .catch(error => { throw(error) });
//   };
// };