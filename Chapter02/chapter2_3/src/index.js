import { createPost, editPost, setFilter } from './actions'
import appReducer from './reducers'

const initialState = []

let state = appReducer(undefined, { type: 'INIT_ACTION' })
console.log('Initial State ', state)

state = appReducer(state, createPost('Dan', 'New Post'))
console.log('State after createPost ', state)

state = appReducer(state, editPost(0, 'Edited Post'))
console.log('State after editPost ', state)

state = appReducer(state, setFilter('none'))
console.log('State after setFilter ', state)
