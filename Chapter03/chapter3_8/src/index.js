import { createStore } from 'redux'

import { createPost } from './actions'
import appReducer from './reducers'

let store = createStore(appReducer)
store.dispatch(createPost('dan', 'YOP YPO'))
setTimeout(() => store.dispatch(createPost('Jean', 'YO')), 2000)
