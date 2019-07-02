import axios from 'axios';
import history from '../history';

export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const REPLACE_USER = 'REPLACE_USER';

const apiUrl = 'http://localhost:8080';

export const getUsers = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/users`)
      .then(response => {
        console.log("getUsersss..:" + response.data)
        dispatch({ type: GET_USERS, users: response.data })
      })
      .catch(error => { throw (error); });
  };
};

export const addUser = ({ firstName, email }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/users`, { firstName, email })
      .then(response => {
        let data = response.data;
        dispatch({ type: ADD_USER, payload: { id_user: data.id_user, firstName: data.firstName, email: data.email } })
      })
      .then(() => {
        history.push("/users")
      })
      .catch(error => { throw (error) });
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/users/${id}`)
      .then(response => {
        dispatch({type: RECEIVE_USER, user: response.data});
      })
      .catch(error => { 
        throw(error); 
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/users/${id}`)
      .then(response => {
        dispatch({type: REMOVE_USER, payload: {id}})
      })
      .then(() => {
        history.push("/users")
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const updateUser = (user) => {
  const userId = user.id_user;
  return (dispatch) => {
    return axios.put(`${apiUrl}/users/${user.id_user}`, {email: user.email, firstName: user.firstName})
      .then(response => {
        const data = response.data;
        dispatch({ type: UPDATE_USER, payload: { id_user: data.id_user, email: data.email, firstName: data.firstName}})
        dispatch({ type: REPLACE_USER, payload: { id_user: data.id_user, email: data.email, firstName: data.firstName}})
      })
      .then(() => {
        history.push(`/users/${userId}`)
      })
      .catch(error => { throw(error) });
  };
};