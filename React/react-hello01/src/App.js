import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
  // componentDidMount() {
  //   this.props.getUsers();
  // }
// 
  // render() {
  //   const user = this.props.user;
  //   return (
  //     <div>
  //       <h1>Reddit ReactJS Posts</h1>
  //       {<ul>
  //         {this.props.users.map((user) =>
  //           <li>{user.email}</li>
  //         )}

  //       </ul>}
  //     </div>
  //   );
  // }

  // const receiveUsers = (json) => ({
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
        
      </div>
    );
  }
}

const getUser = (id) => {
  console.log("response.iddddd", id);
  return (dispatch) => {
    return axios.get('http://localhost:8080/users/222')
      .then(response => {
        console.log("response.data", response);
        dispatch({type: 'GET_USER', user: response});
      })
      .catch(error => {
        throw (error);
      });
  };
};

// const mapStateToProps = (state) => ({ users: state.users });
const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);