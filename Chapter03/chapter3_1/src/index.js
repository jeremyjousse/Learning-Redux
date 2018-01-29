import React from 'react'
import ReactDom from 'react-dom'

import { createStore } from 'redux'

import { createPost, editPost, setFilter } from './actions'
import appReducer from './reducers'

const initialState = []

let store = createStore(appReducer)

const root = document.getElementById('root2')

const render = () => {
  root.innerHTML = ''
  const { posts } = store.getState()
  posts.forEach(post => {
    const item = document.createElement('li')
    const text = document.createTextNode(post.user + ' - ' + post.text)
    item.appendChild(text)
    root.appendChild(item)
  })
}

ReactDom.render(React.createElement('h1', {}, 'Hello World!'), document.getElementById('root'))

ReactDom.render(<h1>Hello World 2!</h1>, document.getElementById('root3'))

const stopRendering = store.subscribe(render)

store.dispatch(createPost('dan', 'hello world'))
store.dispatch(createPost('johann', 'second post'))
