import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user';

class UserEdit extends React.Component {

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const id_user = this.props.user.id_user;
        console.log("user edit id.."+id_user)
        const email = this.state.email ? this.state.email : this.props.user.email;
        const firstName = this.state.firstName ? this.state.firstName : this.props.user.firstName;
        const user = { id_user: id_user, email: email, firstName: firstName }
        this.props.updateUser(user);
    };

    handleCancel = () => {
        this.props.history.push(`/users/${this.props.user.id_user}`);
    }

    render() {
        return (
            <div>
                <h1>Edit {this.props.user.id_user}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>firstName</label>
                        <input type="text" name="firstName" defaultValue={this.props.user.firstName} onChange={this.handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>email</label>
                        <textarea name="email" rows="5" defaultValue={this.props.user.email} onChange={this.handleChange} className="form-control" />
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-dark">Update</button>
                        <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = { updateUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);