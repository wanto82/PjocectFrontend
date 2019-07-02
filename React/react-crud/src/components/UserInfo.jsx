import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, deleteUser } from '../actions/user';

class UserInfo extends Component {
    componentDidMount() {
        console.log("id..." + this.props.match.params.id);
        this.props.getUser(this.props.match.params.id);
    }

    render() {
        const user = this.props.user;
        return (
            <div>
                <h2>{user.id_user}: {user.firstName}</h2>
                <p>{user.email}</p>
                <div className="btn-group">
                    <Link to={{ pathname: `/users/${user.id_user}/edit`, state: { user: user } }} className='btn btn-info'>Edit</Link>
                    <button className="btn btn-danger" type="button" onClick={() => this.props.deleteUser(user.id_user)}>Delete</button>
                    <Link to="/users" className="btn btn-secondary">Close</Link>
                </div>
                <hr />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = { getUser, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);