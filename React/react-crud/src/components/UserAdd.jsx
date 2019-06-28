import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/user';

class UserAdd extends React.Component {
    state = { firstName: '', email: '' };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("ooo.." + this.state.email);
        this.props.addUser(this.state);
    };

    render() {
        return (
            <div>
                <h4>Add User</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="firstName" required value={this.state.firstName} onChange={this.handleChange} className="form-control" placeholder="firstName" />
                    </div>
                    <div className="form-group">
                        <textarea name="email" rows="5" required value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="email" />
                    </div>
                    <button type="submit" className="btn btn-dark">Create</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = { addUser };

export default connect(null, mapDispatchToProps)(UserAdd);