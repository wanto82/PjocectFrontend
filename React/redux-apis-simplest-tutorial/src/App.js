import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        <h1>Reddit ReactJS Posts</h1>
        <ul>
          {this.props.posts.map((post, index) =>
            <li key={index}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

const receivePosts = (json) => ({
  type: 'RECEIVE_POSTS',
  posts: json.data.children.map(child => child.data),
});

const getPosts = () => {
  return (dispatch) => {
    return axios.get('https://www.reddit.com/r/reactjs.json')
      .then(response => {
        console.log("response.data", response.data);
        dispatch(receivePosts(response.data));
      })
      .catch(error => { 
        throw(error); 
      });
  };
};

const mapStateToProps = (state) => ({ posts: state.posts });

const mapDispatchToProps = { getPosts };

export default connect(mapStateToProps, mapDispatchToProps)(App);