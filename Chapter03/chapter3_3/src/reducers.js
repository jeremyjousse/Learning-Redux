import { combineReducers } from 'redux'

import { CREATE_POST, EDIT_POST, SET_FILTER } from './actionTypes'

export function postReducer(state = [], action) {
  switch (action.type) {
    case CREATE_POST: {
      //  const { type, user = "Johny" } = action;

      // rename property
      //const { type: actionType } = action;

      // collect other properties in another object
      const { type, ...post } = action
      return [...state, post]
    }
    case EDIT_POST: {
      const { type, id, ...newPost } = action
      return state.map(
        (oldPost, index) => (action.id === index ? { ...oldPost, ...newPost } : oldPost)
      )
    }
    default: {
      return state
    }
  }
}

export function filterReducer(state = 'all', action) {
  if (action.type == SET_FILTER) {
    return action.filter
  } else {
    return state
  }
}

const appReducer = combineReducers({
  posts: postReducer,
  filter: filterReducer
})

export default appReducer
