import React from 'react'
import PostList from '../components/PostList.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  return { posts: state.posts }
}

const ConnectedPostList = connect(mapStateToProps)(PostList)

export default ConnectedPostList
