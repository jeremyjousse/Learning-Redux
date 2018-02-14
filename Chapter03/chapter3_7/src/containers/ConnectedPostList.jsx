import React from 'react'
import PostList from '../components/PostList.jsx'
import { connect } from 'react-redux'

const getSelectedPosts = ({ selectedPosts, posts }) => {
  return selectedPosts.map(id => posts[id])
}

const mapStateToProps = (state, props) => {
  return { posts: getSelectedPosts(state) }
}

const ConnectedPostList = connect(mapStateToProps)(PostList)

export default ConnectedPostList
