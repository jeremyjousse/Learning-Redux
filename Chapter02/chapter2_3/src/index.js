import { createPost, editPost, setFilter } from './actions'
import { postReducer } from './reducers'

const initialState = []

const action = createPost('Dan', 'New Post')
const newState = postReducer(initialState, action)

const action2 = createPost('Jane', 'Super New Post')

const newState2 = postReducer(newState, action2)

console.log(newState2)
