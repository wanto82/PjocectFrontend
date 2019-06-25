import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
//   componentDidMount() {
//     this.props.getUsers();
//   }

//   render() {
//     return (
//       <div>
//         <h1>Reddit ReactJS Posts</h1>
//         {<ul>
//           {this.props.users.map((user) =>
//             <li>{user.email}</li>
//           )}

//         </ul>}
//       </div>
//     );
//   }

//   const receiveUsers = (json) => ({
//   type: 'RECEIVE_POSTS',
//   users: json.data.map(child => child),
// });

// const getUsers = () => {
//   return (dispatch) => {
//     return axios.get('http://localhost:8080/users')
//       .then(response => {
//         console.log("response.data", response);
//         dispatch({
//           type: 'RECEIVE_POSTS',
//           users: response.data.map(child => child)
//         });
//         // dispatch(receiveUsers(response));
//       })
//       .catch(error => {
//         throw (error);
//       });
//   };
// };

  componentDidMount() {
    this.props.getUser('222');
  }

  render() {
    const user = this.props.user;
    return (
      <div>
        <h1>Reddit ReactJS Posts</h1>
        <h2>{user.id_user}: {user.email}</h2>
      </div>
    );
  }
}

const getUser = (id) => {
  let url='users';
  console.log("response.iddddd", id+' '+url);
  return (dispatch) => {
    return axios.get('http://localhost:8080/'+url+'/'+id)
      .then(response => {
        console.log("response.data", response);
        dispatch({type: 'GET_USER', user: response.data});
      })
      .catch(error => {
        throw (error);
      });
  };
};

// const mapStateToProps = (state) => ({ users: state.users });
// const mapDispatchToProps = { getUsers };
const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);