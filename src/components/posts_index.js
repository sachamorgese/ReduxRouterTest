import React, { Component } from 'react';
import _ from "lodash"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from "../actions/index";


class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  
  renderPosts() {
    console.log(this.props)
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      )
    })
  }
  
  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(PostsIndex)