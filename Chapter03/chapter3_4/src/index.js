import React from 'react'
import ReactDom from 'react-dom'

import PostList from './components/PostList.jsx'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 0,
      somethingElse: false
    }
  }
  tick() {
    const { seconds } = this.state
    this.setState({ seconds: seconds + 1 })
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000)
  }
  componentWillMount() {
    clearImmediate(this.timer)
  }
  render() {
    const { seconds } = this.state
    const posts = [{ user: 'Dan', text: 'Yo yop' }, { user: 'Joe', text: 'Hi!' }]
    return (
      <div>
        <h1>You've spent {seconds} seconds!</h1>
        <PostList posts={posts} />
      </div>
    )
  }
}

ReactDom.render(<Timer />, document.getElementById('root'))
