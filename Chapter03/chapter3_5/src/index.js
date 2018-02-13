import { createStore } from 'redux'
import React from 'react'
import ReactDom from 'react-dom'

import { createPost } from './actions'
import appReducer from './reducers'

import ConnectedPostList from './containers/ConnectedPostList.jsx'

let store = createStore(appReducer)
store.dispatch(createPost('dan', 'YOP YPO'))
setTimeout(() => store.dispatch(createPost('Jean', 'YO')))

ReactDom.render(<ConnectedPostList store={store} />, document.getElementById('root'))
