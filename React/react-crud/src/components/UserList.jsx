import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../actions/user';

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    if(this.props.users.length) {
      return (
        <div>
          <h4>Users</h4>
          {this.props.users.map(user => {
            return (
              <div key={ user.id_user }>
                <hr/>          
                <h4><Link to={`/users/${user.id_user}`}>{user.id_user}: {user.firstName}</Link></h4>
                <p>{user.email}</p>
              </div>
            );
          })}
        </div>
      )    
    } else {
      return (<div>No Users</div>)
    }
  }
}

const mapStateToProps = (state) => ({ users: state.users });
const mapDispatchToProps = { getUsers };
export default connect(mapStateToProps, mapDispatchToProps)(UserList);