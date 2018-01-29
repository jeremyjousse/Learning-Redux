import React from 'react'
import ReactDom from 'react-dom'

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
    return <h1>You've spent {seconds} seconds!</h1>
  }
}

ReactDom.render(<Timer />, document.getElementById('root'))
