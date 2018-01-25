import { createStore } from 'redux'

import { createPost, editPost, setFilter } from './actions'
import appReducer from './reducers'
import reducers from './reducers'

const initialState = []

let store = createStore(appReducer)

const root = document.getElementById('root')

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
const stopRendering = store.subscribe(render)

store.dispatch(createPost('dan', 'hello world'))
store.dispatch(createPost('johann', 'second post'))
