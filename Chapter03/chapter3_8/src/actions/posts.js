import { CREATE_POST, EDIT_POST, DELETE_POST } from '../actionTypes'

export const createPost = (user, post) => {
  const { title, description, category = 'random' } = post
  if (!title || !text) {
    throw new Error('Invalid post')
  }
  return {
    type: CREATE_POST,
    post: { user, title, description, category }
  }
}

export const editPost = (id, post) => {
  return {
    type: EDIT_POST,
    id,
    post
  }
}

export const deletePost = id => {
  return {
    type: DELETE_POST,
    id
  }
}
